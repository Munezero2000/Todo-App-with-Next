import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { SignIn } from "@/components/auth-button";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Munezero",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-slate-950  sticky top-0 font-semibold  p-3">
        <Link href="/" className=" text-lg uppercase text-white">
          Todo List Application
        </Link>
        <div>
          <SignIn />
        </div>
      </nav>
      <div className="flex">
        <Navbar />
        <div className="w-4/5 m-2">{children}</div>
      </div>
    </div>
  );
};

export default layout;
