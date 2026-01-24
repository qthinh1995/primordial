import { useState, useEffect } from "react";

interface UseMenuAnimationOptions {
  /**
   * Duration of the exit animation in milliseconds
   * @default 300
   */
  exitDuration?: number;
  /**
   * Delay before triggering enter animation in milliseconds
   * @default 10
   */
  enterDelay?: number;
  /**
   * Whether to lock body scroll when menu is open
   * @default true
   */
  lockBodyScroll?: boolean;
  /**
   * Callback when pathname changes to reset the menu state
   */
  onPathnameChange?: () => void;
}

interface UseMenuAnimationReturn {
  /** Whether the menu should be open */
  open: boolean;
  /** Function to set the open state */
  setOpen: (open: boolean) => void;
  /** Whether the menu should be rendered in the DOM */
  shouldRender: boolean;
  /** Whether the menu is visible (for animation) */
  isVisible: boolean;
}

/**
 * Custom hook for managing menu slide animations with enter/exit transitions
 */
export function useMenuAnimation(
  pathname?: string,
  options: UseMenuAnimationOptions = {}
): UseMenuAnimationReturn {
  const {
    exitDuration = 300,
    enterDelay = 10,
    lockBodyScroll = true,
    onPathnameChange,
  } = options;

  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Reset menu state when pathname changes
  useEffect(() => {
    if (pathname !== undefined) {
      setOpen(false);
      setShouldRender(false);
      setIsVisible(false);
      onPathnameChange?.();
    }
  }, [pathname, onPathnameChange]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (lockBodyScroll) {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open, lockBodyScroll]);

  // Handle animation visibility and rendering
  // Note: setState in useEffect is necessary here for exit animations
  // to keep the component mounted during the animation transition
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (open) {
      // Ensure visible state is false when mounting
      setIsVisible(false);
      setShouldRender(true);
      // Small timeout ensures the initial hidden state is painted
      // before triggering the visible state for smooth slide-in animation
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, enterDelay);
    } else {
      // Start exit animation
      setIsVisible(false);
      // Unmount after animation completes
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, exitDuration);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return {
    open,
    setOpen,
    shouldRender,
    isVisible,
  };
}
