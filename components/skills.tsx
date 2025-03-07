"use client";

import React, { use } from "react";
import { BadgeCheck } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { MotionTransition } from "./MotionTransition";

export function Skills() {
  const skills = [
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React.js", url: "https://react.dev/" },
    { name: "Next.js", url: "https://nextjs.org/docs" },
    { name: "Node.js", url: "https://nodejs.org/en/docs/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
    { name: "MongoDB", url: "https://www.mongodb.com/docs/" },
    { name: "MySQL", url: "https://dev.mysql.com/doc/" },
    { name: "HTML & CSS", url: "https://developer.mozilla.org/en-US/docs/Learn" },    
    { name: "Java", url: "https://docs.oracle.com/en/java/" },
    { name: "Git", url: "https://git-scm.com/doc" },
    { name: "Docker", url: "https://docs.docker.com/" },
    { name: "Kubernetes", url: "https://kubernetes.io/docs/" },
    { name: "AWS", url: "https://aws.amazon.com/documentation/" },
    { name: "Azure", url: "https://learn.microsoft.com/en-us/azure/" },
    { name: "Testing", url: "https://jestjs.io/docs/getting-started" },
    { name: "Scrum", url: "https://www.scrum.org/resources/what-is-scrum" },
    { name: "RESTful APIs", url: "https://restfulapi.net/" },
    { name: "GraphQL", url: "https://graphql.org/learn/" },
    { name: "Microservices", url: "https://microservices.io/" },
    { name: "WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
    { name: "Figma", url: "https://help.figma.com/" },
    { name: "Jira", url: "https://support.atlassian.com/jira-software-cloud/" },
    { name: "Trello", url: "https://support.atlassian.com/trello/" },
    { name: "Web Development", url: "https://developer.mozilla.org/en-US/docs/Learn" },
    { name: "Communication", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
    { name: "Problem Solving", url: "https://asq.org/quality-resources/problem-solving" },
    { name: "Teamwork", url: "https://www.mindtools.com/pages/article/newLDR_86.htm" },
    { name: "Back-end", url: "https://developer.mozilla.org/en-US/docs/Glossary/Backend" },
    { name: "Front-end", url: "https://developer.mozilla.org/en-US/docs/Glossary/Frontend" },
    { name: "Full Stack", url: "https://www.codecademy.com/resources/blog/what-is-full-stack-development/" },
    { name: "Software Development", url: "https://www.microsoft.com/en-us/microsoft-365/business/software-development" },
    { name: "Database Management", url: "https://www.oracle.com/database/what-is-database-management/" },
    { name: "Project Management", url: "https://www.pmi.org/" },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-start justify-start text-left px-6 md:px-12 lg:px-24 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="flex items-center mb-6">
        <BadgeCheck className="w-6 h-6 text-green-500 dark:text-green-400 mr-2 stroke-2" />
        <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
      </div>
      {/* Diseño de cuadrícula adaptable */}
      <div className="w-full">
      <MotionTransition >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg border border-green-500 p-2 flex items-center justify-center text-sm font-medium text-center w-full hover:bg-green-100 dark:hover:bg-green-900 transition-all"
            >
              {skill.name}
            </a>
          ))}
        </div>
      </MotionTransition>
      </div>
      
    </section>
  );
}

