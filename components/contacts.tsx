"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from 'react-hot-toast';



export default function Contacts() {
  const { ref } = useSectionInView("Contact");
  

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-3 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hrg0316@gmail.com">
          hrg0316@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="flex flex-col mt-10 dark:text-black/80"
          action={async(formData)=>{
            const{data,error}=await sendEmail(formData);

            if(error){
              toast.error(error);
              return;
            }

            toast.success('Email sent successfully!');
          }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="px-4 transition border-black rounded-lg h-14 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 rounded-lg borderBlack h-72 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
       <SubmitBtn />
      </form>
    </motion.section>
  );
}
