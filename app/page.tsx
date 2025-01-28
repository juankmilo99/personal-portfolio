import { About } from "@/components/about";
import Contact from "@/components/contacto";
import { Education } from "@/components/educacion";
import { Experience } from "@/components/experience";
import { Inicio } from "@/components/home";
import Projects from "@/components/proyectos";
import { Skills } from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Inicio />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>    
 
  );
}
