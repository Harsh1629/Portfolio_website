"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} =useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I possess an unwavering enthusiasm for the field of{" "}
        <span className="italic font-bold"> Machine Learning and Data Science</span>,
        coupled with a deep interest in{" "}
        <span className="italic font-bold">Web development</span>. My strengths
        are identifying solutions to complex problems and my eagerness to take
        on new challenges. It is important to me that I am not content with just
        any solution,as{" "}
        <span className="font-bold">
          I am always striving to enhance and optimize the outcome.
        </span>
      </p>
      {/* <p>
        I am a second year undergraduate student of the Department of{" "}
        <span className="font-bold">Chemical engineering</span> enrolled in its
        B.tech course.I am from Jamshedpur, Jharkhand.
      </p> */}
    </motion.section>
  );
}
