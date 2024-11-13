"use client";
import React from "react";
import Link from "next/link";
import { Music, User } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

function Navigation() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <nav className="flex-1 flex items-center space-x-4 md:space-x-6">
        <Link className="flex items-center space-x-2 font-semibold" href="#">
          <Music className="h-6 w-6" />
          <span className="sr-only">LyricsApp</span>
        </Link>
        <Link className="font-medium" href="/">
          Songs
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <form className="hidden md:block">
          <Input
            className="w-[200px] md:w-[300px]"
            placeholder="Search songs..."
            type="search"
          />
        </form>
        <Button className="rounded-full" size="icon" variant="ghost">
          <User className="h-4 w-4" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
}

export default Navigation;