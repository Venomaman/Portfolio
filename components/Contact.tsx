"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb:28 w-[min(100%,38rem)] text-center scroll-mt-28"
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
      <SectionHeading>Contact me..</SectionHeading>
      <p className="text-gray-600 font-medium text-sm -mt-4 dark:text-white/70">
        I know you are not going to fill this Form😒{" "}
        <span className="font-bold text-lg dark:text-white/80">contact me </span>directly at{" "}
        <span className="text-slate-900 font-semibold text-lg underline dark:text-white/90">
          aman11808891@gmail.com{" "}
        </span>
        or you know ryt..<span className="font-bold text-lg">⇩</span>
      </p>
      <form
      action={async(formData)=>{
       const { data, error } = await sendEmail(formData);

       if(error){
         toast.error(error);
         return;
       }
       toast.success("Email sent Successfull!");
      }}
      className="flex flex-col mt-10 dark:text-black">
        <input
          className="h-14 px-4 rounded-lg border border-black/10 shadow-sm dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email.."
        />
        <textarea
          placeholder="Your Message.."
          name="message"
          required
          maxLength={5000}
          className="h-52 p-4 my-3 border border-black/10 rounded-lg shadow-sm dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
       <SubmitBtn/>
      </form>
    </motion.section>
  );
}
