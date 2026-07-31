"use client";

import Image from "next/image";

const education = [
  {
    id: 1,
    institution: "Independent University, Bangladesh (IUB)",
    degree: "Bachelor of Science in Computer Science",
    period: "2022 - Present",
    logo: "/independent-university-bangladesh-logo.png",
  },
  {
    id: 2,
    institution: "Rangamati Government College",
    degree: "Higher Secondary Certificate (Science)",
    period: "2019 - 2021",
    logo: "/college-logo-no-bg.png",
  },
  {
    id: 3,
    institution: "Rangamati Government High School",
    degree: "Secondary School Certificate (Science)",
    period: "2014 - 2019",
    logo: "/school-logo-no-bg.png",
  },
];

export default function Experience() {
  return (
    <section
      id="education"
      className="px-4 pb-5 pt-14 md:pb-6 md:pt-16"
    >
      {/* Heading and education list stay inside the same container */}
      <div className="mx-auto w-full max-w-3xl">
        {/* Section Header */}
        <div className="mb-6 border-b border-foreground/60 pb-2">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
            Education
          </h2>
        </div>

        {/* Education List */}
        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.id}
              className="group flex items-start gap-3 transition-transform duration-200 ease-out hover:translate-x-1 md:gap-4"
            >
              {/* Institution Logo */}
              <div className="flex size-14 shrink-0 items-center justify-center md:size-16">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  width={64}
                  height={64}
                  className="
                    h-full
                    w-full
                    object-contain
                    transition-[filter,transform]
                    duration-200
                    ease-out
                    group-hover:scale-105
                    dark:brightness-110
                    dark:drop-shadow-[0_0_2px_rgba(255,255,255,0.65)]
                  "
                />
              </div>

              {/* Education Information */}
              <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-tight text-primary transition-colors duration-200 group-hover:text-primary/80 md:text-lg">
                    {item.institution}
                  </h3>

                  <p className="mt-0.5 text-sm font-medium italic leading-snug text-foreground md:text-base">
                    {item.degree}
                  </p>
                </div>

                <p className="mt-0.5 shrink-0 whitespace-nowrap text-sm text-muted-foreground sm:text-right">
                  {item.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
