import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    two: {
        opacity: 0,
        y: "100%",
      },

    Three: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial = {animations.one}
          transition={{
            delay:0.2,
          }}
        >
          <h3>6+</h3>
          <p>Monts Experience</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial = {animations.two}
          transition={{
            delay:0.4,
          }}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial = {animations.Three}
          transition={{
            delay:0.2,
          }}
        >
          <AiFillAndroid />
          <span>App Development</span>
        </motion.div>

        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial = {animations.four}
          transition={{
            delay:0.2,
          }}
        >
          <AiFillWindows />
          <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
