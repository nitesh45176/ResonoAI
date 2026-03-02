"use client"

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Welcome to resonance
      <OrganizationSwitcher/>
      <UserButton/>
    </div>
  );
}
