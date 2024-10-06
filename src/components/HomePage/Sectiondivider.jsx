"use client";

import React from "react";
import { motion } from "framer-motion";


const SectionDivider = () => {
  return (
    <motion.div
      className="section-divider"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125, duration: 0.5, ease: "easeOut" }}
    />
  );
};

export default SectionDivider;
