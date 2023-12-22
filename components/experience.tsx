"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const {theme}=useTheme();

  return (
    <motion.section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40"  animate={{ x: 1 }}
    transition={{ type: "spring", stiffness: 100 }}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background: 
                theme==="light"?"#f3f4f5f6":"rgba(255,255,255,0.05)",
                boxShadow: "revert-layer",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme==='light'?"0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                  background: "#C3ACD0",
              }}
            >
              <h3 className="font-bold underline capitalize">{item.title}</h3>
              <h3 className="font-semibold capitalize">{item.Company}</h3>
              {/* <p className="font-normal !mt-0">{item.location}</p> */}
              <p className="!mt-1 !font-normal text-black-700">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
