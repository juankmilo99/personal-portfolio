"use client"
import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
            <button onClick={() => handleScroll("inicio")} className="block mb-3">Inicio</button>
            <button onClick={() => handleScroll("about")} className="block mb-3">Acerca de</button>
            <button onClick={() => handleScroll("experience")} className="block mb-3">Experiencia</button>
            <button onClick={() => handleScroll("education")} className="block mb-3">Educación</button>
            <button onClick={() => handleScroll("contact")} className="block mb-3">Contacto</button>              
            
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;