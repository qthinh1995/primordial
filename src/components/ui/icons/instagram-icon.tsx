import { SVGProps } from "react";

export function InstagramIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      viewBox="0 0 28 28"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer circle: white border, gold fill */}
      <circle
        cx="14"
        cy="14"
        r="13.5"
        fill="#C5A25D"
        stroke="white"
        strokeWidth="1"
      />
      {/* Rounded square (camera body): white border, gold fill */}
      <path
        fill="#C5A25D"
        stroke="white"
        strokeWidth="1.1"
        strokeLinejoin="round"
        d="M9.5 8.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"
      />
      {/* Lens circle: white border, gold fill */}
      <circle
        cx="14"
        cy="14"
        r="3.25"
        fill="#C5A25D"
        stroke="white"
        strokeWidth="1.1"
      />
      {/* Viewfinder dot: white fill */}
      <circle cx="17.5" cy="10.5" r="0.9" fill="white" />
    </svg>
  );
}
