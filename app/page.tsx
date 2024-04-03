import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-3xl pb-5 font-mono text-indigo-400">
        {" "}
        Next.js Object Detection web app using Hugging Face{" "}
      </h1>
      <Link
        className={cn(buttonVariants({ variant: "outline" }))}
        href={"/image-classification"}
      >
        {" "}
        Upload Image{" "}
      </Link>
    </main>
  );
}
