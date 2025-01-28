"use client";
import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/toggle-theme";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl cursor-pointer" onClick={() => handleScroll("inicio")}>
          Jxcr<span className="font-bold">Dev</span>
        </h1>
        <div className="space-x-4">
          <Button variant="ghost" onClick={() => handleScroll("inicio")}>
            Inicio
          </Button>
          <Button variant="ghost" onClick={() => handleScroll("about")}>
            Acerca de
          </Button>
          <Button variant="ghost" onClick={() => handleScroll("experience")}>
            Experiencia
          </Button>
          <Button variant="ghost" onClick={() => handleScroll("education")}>
            Educación
          </Button>
          <Button variant="ghost" onClick={() => handleScroll("contact")}>
            Contacto
          </Button>
        </div>
        <ToggleTheme />
      </nav>
    </header>
  );
}
