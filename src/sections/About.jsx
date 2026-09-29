import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-dark">

      {/* HEADER */}
      <motion.div
        className="about-dark-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>ABOUT ME</span>

        <h1>
          CREATIVE
          <br />
          <em>THINKING.</em>
        </h1>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="about-dark-content">

        {/* LEFT */}
        <motion.div
          className="about-dark-services"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-service">
            <span>01</span>

            <div>
              <strong>UI / UX DESIGN</strong>
              <p>
                Clean interfaces focused on clarity,
                usability and meaningful experiences.
              </p>
            </div>
          </div>

          <div className="about-service">
            <span>02</span>

            <div>
              <strong>WEB DEVELOPMENT</strong>
              <p>
                Responsive websites built with modern
                web technologies and practical solutions.
              </p>
            </div>
          </div>

          <div className="about-service">
            <span>03</span>

            <div>
              <strong>GRAPHIC DESIGN</strong>
              <p>
                Visual communication that combines
                creativity with a strong design sense.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="about-dark-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="about-dark-large">
            I'm a BCA graduate passionate about
            <span> design, technology</span> and
            <span> digital experiences.</span>
          </p>

          <p>
            My background combines UI/UX design,
            graphic design and web development.
            I enjoy turning ideas into clean,
            responsive and practical digital
            experiences.
          </p>

          <p>
            I also bring professional experience
            from technical operations and digital
            marketing environments.
          </p>

          <a href="/experience" className="about-dark-link">
            VIEW MY EXPERIENCE
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>

      {/* STATS */}
      <motion.div
        className="about-dark-stats"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div>
          <strong>01</strong>
          <span>YEAR</span>
          <p>TATA PEGATRON</p>
        </div>

        <div>
          <strong>06</strong>
          <span>MONTHS</span>
          <p>WE BEE TECH</p>
        </div>

        <div>
          <strong>BCA</strong>
          <span>GRADUATE</span>
          <p>2019 — 2022</p>
        </div>

        <div>
          <strong>15+</strong>
          <span>TEAMS</span>
          <p>E-SPORTS COMPETITION</p>
        </div>

      </motion.div>

    </section>
  );
}

export default About;