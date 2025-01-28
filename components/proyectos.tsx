"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const projects = [
  {
    title: "ENCUESTADOR LABORAL BASADO EN GOHISALO",
    institution: "UNIVERSIDAD SANTO TOMAS",
    description:
      "Aplicación para recolección y análisis de información con respecto a la calidad de vida en el trabajo de la institución, usando gráficas y notificaciones vía correo.",
    technologies: ["Angular.js", "Node.js", "Express", "Chart.js"],
    url: "https://gohifront.netlify.app/",
  },
  {
    title: "BlueBank",
    institution: "JxcrDev",
    description:
      "Aplicación para consultar detalles de cuenta de banco, dando información con respecto a saldo, extractos, movimientos, transacciones, además de reportes.",
    technologies: ["Angular.js", "Java", "Spring Boot"],
    url: "https://bluebank.netlify.app/",
  },
  {
    title: "FlowStoreWeb",
    institution: "JxcrDev",
    description:
      "Aplicación ecommerce de productos de ferretería para realizar pedidos online con notificaciones de factura vía correo y plataforma de pago Wompi.",
    technologies: ["Angular.js", "Java", "Spring Boot"],
    url: "https://flowstoreweb.netlify.app/",
  },
  {
    title: "MyCoffeeShop",
    institution: "JxcrDev",
    description:
      "Aplicación ecommerce de productos de cafetería para realizar pedidos online con plataforma de pago Stripe.",
    technologies: ["Next.js", "React.js", "Node.js", "Express"],
    url: "https://ecommerce-coffe.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-12 px-6">
      <h2 className="text-4xl mb-12 text-center font-bold">🚀 Proyectos</h2>

      <Carousel
        className="w-full max-w-5xl mx-auto"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
            >
              <Card
                className="border border-green-500 shadow-lg p-4 flex flex-col justify-between"
                style={{
                  height: "400", // Altura uniforme
                  width: "100%", // Ancho flexible según el contenedor
                }}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                      <p className="text-sm text-gray-500">{project.institution}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        className="border border-green-500 text-green-400 bg-transparent text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Projects;
