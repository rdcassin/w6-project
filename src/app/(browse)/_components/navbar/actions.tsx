"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Actions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="hidden md:flex">
          <ul className="list-none flex justify-center items-center">
            <li className="mx-3">
              <Link
                href="/"
                className="font-bold text-black hover:underline hover:decoration-2 hover:underline-offset-6 hover:text-red-600"
              >
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link
                href="/results"
                className="font-bold text-black hover:underline hover:decoration-2 hover:underline-offset-6 hover:text-red-600"
              >
                Find Your Movies
              </Link>
            </li>
            <li className="mx-3">
              <Link
                href="/"
                className="cursor-pointer text-sm font-bold text-yellow-400 bg-red-600 rounded-full px-6 py-4 transition-all duration-300 ease-in-out hover:text-red-600 hover:bg-yellow-400"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className={cn("md:hidden", isMenuOpen && "hidden")}>
          <Button
            onClick={toggleMenu}
            className="h-auto p-2"
            variant="ghost"
            size="icon"
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "hidden",
          isMenuOpen &&
            "flex flex-col fixed w-full z-10 top-0 right-0 left-0 p-2"
        )}
      >
        <div className="bg-white border border-gray-200 rounded-lg m-2 p-8">
          <Button
            onClick={toggleMenu}
            className="fixed top-8 right-8"
            variant="ghost"
            size="icon"
          >
            <X className="size-4" />
          </Button>
          <ul className="list-none flex flex-col justify-center items-center">
            <li className="my-2">
              <Link
                href="/"
                className="font-bold text-black hover:underline hover:decoration-2 hover:underline-offset-6 hover:text-red-600"
              >
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/results"
                className="font-bold text-black hover:underline hover:decoration-2 hover:underline-offset-6 hover:text-red-600"
              >
                Find Your Movies
              </Link>
            </li>
            <li className="my-4">
              <Link
                href="/"
                className="cursor-pointer text-sm font-bold text-yellow-400 bg-red-600 rounded-full px-6 py-4 transition-all duration-300 ease-in-out hover:text-red-600 hover:bg-yellow-400"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
