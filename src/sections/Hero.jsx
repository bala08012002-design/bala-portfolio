import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/Profile.png";

const letterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const letterItem = {
  hidden: {
    opacity: 0,
    y: 35,
    rotateX: -70,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AnimatedText({ text }) {
  return (
    <motion.span
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      aria-label={text}
      style={{
        display: "inline",
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterItem}
          aria-hidden="true"
          style={{
            display: char === " " ? "inline" : "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
            transformOrigin: "bottom",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function Hero() {
  return (
    <section className="hero-reference">

      {/* LEFT CONTENT */}

      <motion.div
        className="hero-reference-content"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >

        {/* HELLO */}

       <div className="hero-reference-greeting">
  <span className="hero-greeting-text">
    <AnimatedText text="Hello" />
  </span>
  <span className="hero-greeting-dot">.</span>
</div>

        {/* NAME */}

        <div className="hero-reference-name">

          <motion.span
            className="hero-line"
            initial={{
              scaleX: 0,
              transformOrigin: "left",
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <AnimatedText text="I'm Bala" />

        </div>

        {/* MAIN ROLE */}

        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <AnimatedText text="UI/UX DESIGNER" />
          <br />
          <AnimatedText text="& WEB DEVELOPER" />
        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          I design and build clean, responsive
          digital experiences by combining
          creativity with technology.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          className="hero-reference-actions"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.7,
          }}
        >

         <a
  href="https://wa.me/918056740325?text=Hi%20Bala%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noreferrer"
  className="hero-reference-primary"
>
  Let's talk
  <ArrowUpRight size={17} />
</a>
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="hero-reference-secondary"
>
            My resume
          </a>

        </motion.div>

      </motion.div>

      {/* RIGHT VISUAL */}

      <motion.div
        className="hero-reference-visual"
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <motion.div
          className="hero-reference-ring"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.span
          className="hero-decor hero-decor-left"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 0.55,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 2.2,
          }}
        >
          &lt;
        </motion.span>

        <motion.span
          className="hero-decor hero-decor-right"
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 0.55,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 2.35,
          }}
        >
          &gt;
        </motion.span>

        <motion.img
          src={profile}
          alt="Bala Subramanian"
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 2.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

      </motion.div>

      {/* TECHNOLOGY STRIP */}

      <motion.div
        className="hero-reference-tech"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 2.6,
        }}
      >

        {[
          "HTML",
          "CSS",
          "JAVASCRIPT",
          "REACT.JS",
          "PHP",
          "MYSQL",
          "FIGMA",
        ].map((tech, index) => (
          <motion.span
            key={tech}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              delay: 2.65 + index * 0.08,
            }}
          >
            {tech}
          </motion.span>
        ))}

      </motion.div>

    </section>
  );
}

export default Hero;