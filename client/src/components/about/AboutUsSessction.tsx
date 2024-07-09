"use client"
import { motion } from 'framer-motion'
import React from 'react'


const AboutUsSection = () => {
  return (
    <motion.div initial={{opacity:0 ,y:"-100 %"}} animate={{opacity:1,y:0}} transition={{duration:1}}  className="w-full h-[70%] flex justify-center items-center pt-10 border-b-2 rounded-b-full">
    <h1 className="text-center text-3xl font-bold bg-white dark:bg-zinc-900">About-Us</h1>
  </motion.div>
  )
}

export default AboutUsSection