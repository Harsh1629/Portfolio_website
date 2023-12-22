"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
type ProjectProps = (typeof projectsData)[number];
import { motion } from "framer-motion";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress=useTransform(scrollYProgress,[0,1],[0.6,1]);
  const opacityProgress=useTransform(scrollYProgress,[0,1],[0.6,1]);
  
  return (
    <motion.div ref={ref} style={{
        scale: scaleProgress,
        opacity: opacityProgress,
    }}
    className="mb-3 group sm:mb-8 last:mb-0">
      <section className="group bg-gray-100 max-w-[42rem] border border-black/5  rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem]  sm:group-even:even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10  sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Projects I worked on"
          width={500}
          height={300}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
    group-even:group-hover:tranlate-x-3
    group-even:group-hover:tranlate-y-3
    group-even:group-hover:rotate-2
    "
        />
      </section>
    </motion.div>
  );
}
