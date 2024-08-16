"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { data, status } = useSession();
  const links = [
    {
      label: "Create new todo",
      href: "/todos/new",
    },
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

  console.log("DATA:", data?.user);
  console.log("DATA:", data?.user);
  const user = data?.user;
  return (
    <div className="hidden md:block md:min-w-60 px-1">
      <div className="flex flex-col my-2  p-2 rounded-sm items-center">
        <Avatar>
          <AvatarImage src={user?.user?.image!} />
          <AvatarFallback>I</AvatarFallback>
        </Avatar>
        <p className="font-semibold">{user?.user?.image}</p>
        {/* <p>{role}</p> */}
      </div>
      <nav className="flex fixed flex-col min-w-60">
        {links.map((link) => (
          <Link
            key={link.href}
            className="my-1 divide-y bg-slate-950 text-white divide-slate-950 p-2 rounded-sm"
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
