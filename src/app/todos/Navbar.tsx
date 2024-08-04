"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const links = [
    {
      label: "All Todos",
      href: "/todos",
    },
    {
      label: "In Progress",
      href: "/todos?filter=inprogress",
    },
    {
      label: "Completed",
      href: "/todos?filter=completed",
    },
  ];
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <div className="min-w-60 px-1">
      <nav className="flex fixed flex-col min-w-60">
        {links.map((link) => (
          <Link
            key={link.href}
            className="my-1 divide-y bg-slate-900 text-white divide-slate-950 p-2 rounded-sm"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
