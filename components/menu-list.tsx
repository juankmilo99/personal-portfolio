"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const MenuList = () => {
    const handleScroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>                
                
                <NavigationMenuItem>
                    <NavigationMenuLink  onClick={() => handleScroll("inicio")} className={navigationMenuTriggerStyle()}>
                        Inicio
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink  onClick={() => handleScroll("about")} className={navigationMenuTriggerStyle()}>
                        Acerca de
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink  onClick={() => handleScroll("experience")} className={navigationMenuTriggerStyle()}>
                        Experiencia
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink  onClick={() => handleScroll("education")} className={navigationMenuTriggerStyle()}>
                        Educación
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink  onClick={() => handleScroll("projects")} className={navigationMenuTriggerStyle()}>
                        Proyectos
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink  onClick={() => handleScroll("contact")} className={navigationMenuTriggerStyle()}>
                        Contacto
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList