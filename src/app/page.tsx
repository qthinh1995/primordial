import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect to Vietnamese home page as default
  redirect("/vi");
}
