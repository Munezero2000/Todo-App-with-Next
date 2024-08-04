import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <nav className="bg-slate-950 text-lg uppercase  sticky top-0 font-semibold text-white p-3">
        Todo List Application
      </nav>
      <div className="flex">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
