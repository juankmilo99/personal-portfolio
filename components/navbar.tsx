"use client";
import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/toggle-theme";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";

export function Navbar() {
  const router = useRouter();

  

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl cursor-pointer" onClick={() => router.push("/")}>
          Jxcr<span className="font-bold">Dev</span>
        </h1>

        <div className="items-center justify-between hidden sm:flex cursor-pointer">
          <MenuList />
        </div>

        <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
       
        <ToggleTheme />
      </nav>
    </header>
  );
}
