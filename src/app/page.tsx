import Image from "next/image";
import todoImage from "./../../public/todoImage.webp";
import { SignIn } from "@/components/auth-button";
import { Metadata } from "next";



export default function Home() {
  return (
    <main className="flex h-svh dark:bg-slate-950 bg-slate-100">
      <div className="flex md:m-8 md:rounded-lg overflow-hidden shadow-xl shadow-slate-300">
        <Image className="hidden md:flex md:w-1/2 md:max-h-screen" src={todoImage} alt="Landing page Image" />
        <div className="flex flex-col items-center justify-center md:w-1/2 space-y-4">
          <div className="text-center ">
            <p className="font-semibold text-xl">Get ahead of your day!🌞</p>
            <p className="text-lg">Sign in/Sign up here now and start planning your life with ease</p>
          </div>
          <SignIn />
        </div>
      </div>
    </main>
  );
}
