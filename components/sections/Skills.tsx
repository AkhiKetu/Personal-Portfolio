"use client";

import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { PiMicrosoftPowerpointLogo, PiMicrosoftWordLogo } from "react-icons/pi";
import {
  SiArduino,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGoogledocs,
  SiGooglesheets,
  SiGoogleslides,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Development",
    skills: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "text-blue-500",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "text-orange-600",
      },
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-500",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-600",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-foreground",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-600 dark:text-blue-400",
      },
      {
        name: "SQL",
        icon: TbSql,
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-orange-600",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-foreground",
      },
      {
        name: "VS Code",
        icon: VscCode,
        color: "text-blue-500",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "text-blue-500",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-foreground",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "text-teal-500",
      },
      {
        name: "Arduino IDE",
        icon: SiArduino,
        color: "text-teal-500",
      },
    ],
  },
  {
    title: "Productivity & Collaboration",
    skills: [
      {
        name: "Google Sheets",
        icon: SiGooglesheets,
        color: "text-green-600",
      },
      {
        name: "Google Slides",
        icon: SiGoogleslides,
        color: "text-yellow-500",
      },
      {
        name: "PowerPoint",
        icon: PiMicrosoftPowerpointLogo,
        color: "text-orange-600",
      },
      {
        name: "Google Docs",
        icon: SiGoogledocs,
        color: "text-blue-500",
      },
      {
        name: "Microsoft Word",
        icon: PiMicrosoftWordLogo,
        color: "text-blue-600",
      },
      {
        name: "Writing Skills",
        icon: MdEditNote,
        color: "text-purple-500",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 pb-10 pt-3 md:pb-12 md:pt-4">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-5">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
            Skills
          </h2>

          <p className="mt-1 text-base text-muted-foreground md:text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-5">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-2 text-base font-bold uppercase text-primary md:text-lg">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        group
                        inline-flex
                        cursor-default
                        items-center
                        gap-1.5
                        whitespace-nowrap
                        rounded-md
                        border
                        border-border
                        bg-background
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        shadow-sm
                        transition-[transform,border-color,background-color,box-shadow]
                        duration-200
                        ease-out
                        hover:-translate-y-1
                        hover:border-primary/60
                        hover:bg-primary/5
                        hover:shadow-md
                      "
                    >
                      <Icon
                        size={14}
                        className={`
                          shrink-0
                          transition-transform
                          duration-200
                          ease-out
                          group-hover:scale-110
                          ${skill.color}
                        `}
                      />

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
