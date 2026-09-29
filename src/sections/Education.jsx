import {
  GraduationCap,
  Award,
  ArrowUpRight,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

function Education() {
  const [cgpa, setCgpa] = useState(0);
  const [started, setStarted] = useState(false);

  const resultRef = useRef(null);

  /* Start counter when CGPA enters viewport */
  useEffect(() => {
    const element = resultRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  /* Counter animation */
  useEffect(() => {
    if (!started) return;

    const target = 6.17;
    const duration = 1500;
    let startTime = null;
    let frameId;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      /* Smooth ease-out */
      const eased =
        1 - Math.pow(1 - progress, 3);

      setCgpa(target * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCgpa(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [started]);

  return (
    <section className="education-editorial">

      {/* HEADER */}
      <motion.div
        className="education-editorial-heading"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span>EDUCATION</span>

        <h1>
          LEARN
          <br />
          <em>BUILD.</em>
        </h1>
      </motion.div>

      {/* INTRO */}
      <motion.div
        className="education-editorial-intro"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <p>
          An academic foundation in computer
          applications, supported by continuous
          learning and practical digital skills.
        </p>
      </motion.div>

      {/* EDUCATION */}
      <motion.article
        className="education-editorial-main"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <div className="education-editorial-number">
          <span>01</span>
          <span>2019 — 2022</span>
        </div>

        <div className="education-editorial-content">

          <div className="education-editorial-icon">
            <GraduationCap
              size={27}
              strokeWidth={1.5}
            />
          </div>

          <div>
            <span className="education-editorial-label">
              BACHELOR'S DEGREE
            </span>

            <h2>
              BACHELOR OF
              <br />
              <em>
                COMPUTER APPLICATIONS.
              </em>
            </h2>

            <p>
              Sadakathullah Appa College,
              Tirunelveli
            </p>
          </div>

          {/* CGPA COUNTER */}
          <div
            ref={resultRef}
            className={`education-editorial-result ${
              started ? "cgpa-active" : ""
            }`}
          >

            <div className="cgpa-visual">

              <div className="cgpa-orbit orbit-one" />
              <div className="cgpa-orbit orbit-two" />

              <span className="cgpa-dot" />

              <strong>
                {cgpa.toFixed(2)}
              </strong>

            </div>

            <span className="cgpa-label">
              CGPA
            </span>

          </div>

        </div>

      </motion.article>

      {/* CERTIFICATION */}
      <motion.article
        className="education-editorial-certificate"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
      >

        <div className="education-editorial-number">
          <span>02</span>
          <span>CERTIFICATION</span>
        </div>

        <div className="education-editorial-certificate-content">

          <div className="education-editorial-icon">
            <Award
              size={25}
              strokeWidth={1.5}
            />
          </div>

          <div>
            <span className="education-editorial-label">
              PROFESSIONAL CERTIFICATION
            </span>

            <h3>
              MICROSOFT EXCEL
              <br />
              <em>COURSE.</em>
            </h3>

            <p>
              Infosys Springboard
            </p>
          </div>

          <ArrowUpRight
            className="education-editorial-certificate-arrow"
            size={24}
          />

        </div>

      </motion.article>

      {/* CLOSING */}
      <motion.div
        className="education-editorial-closing"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span>CONTINUOUS LEARNING</span>

        <p>
          Building on academic knowledge through
          practical experience, technical skills and
          continued learning.
        </p>
      </motion.div>

    </section>
  );
}

export default Education;