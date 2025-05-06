"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
  reverse?: boolean;
  icon?: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  statNumber: string;
  statLabel: string;
  imageUrl: string;
};

const FeatureHighlight = ({
  reverse = false,
  icon,
  tag,
  title,
  description,
  statNumber,
  statLabel,
  imageUrl,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControls.start({ x: 0, opacity: 1 });
      imageControls.start({ y: 0, opacity: 1 });
    }
  }, [isInView, textControls, imageControls]);

  return (
    <section
      ref={ref}
      className={`feature ${reverse ? "feature--reverse" : ""}`}
    >
      <div className="feature__container">
        <motion.div
          className="feature__text"
          initial={{ x: -50, opacity: 0 }}
          animate={textControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="feature__tag">
            <span className="feature__icon">{icon}</span>
            <h5 className="feature__tagline">{tag}</h5>
          </div>
          <h3 className="feature__title">{title}</h3>
          <p className="feature__description">{description}</p>
          <div className="feature__stat">
            <div className="feature__stat-number">{statNumber}</div>
            <div className="feature__stat-label">{statLabel}</div>
          </div>
        </motion.div>

        <motion.div
          className="feature__image"
          initial={{ y: 50, opacity: 0 }}
          animate={imageControls}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img src={imageUrl} alt={title} />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
