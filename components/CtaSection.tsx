"use client";

import { ctaData } from "@/data/cta";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="cta">
      <motion.div
        className="cta__container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="cta__heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {ctaData.heading}
        </motion.h2>

        <motion.p
          className="cta__subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {ctaData.subheading}
        </motion.p>

        <motion.a
          href={ctaData.buttonLink}
          className="cta__button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaData.buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CtaSection;
