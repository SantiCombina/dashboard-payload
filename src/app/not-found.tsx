import Link from "next/link";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <section
      className={cn(
        "min-h-screen justify-center items-center flex",
        inter.className,
      )}
    >
      <h1>404</h1>
      <span>This page could not be found.</span>
      <Link href="/">Back</Link>
    </section>
  );
}
