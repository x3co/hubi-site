import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const h = await headers();
  const accept = h.get("accept-language") || "";
  const prefers = accept.toLowerCase().startsWith("es") ? "es" : "en";
  redirect(`/${prefers}`);
}
