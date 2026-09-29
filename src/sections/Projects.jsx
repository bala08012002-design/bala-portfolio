import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
  const technologies = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "PHP",
    "MYSQL",
  ];

  return (
    <section className="projects-editorial">

      {/* Heading */}
      <motion.div
        className="projects-editorial-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>PROJECTS</span>

        <h1>
          SELECTED
          <br />
          <em>WORK.</em>
        </h1>
      </motion.div>

      {/* Intro */}
      <motion.div
        className="projects-editorial-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          A selection of work combining web development,
          responsive design and practical digital
          solutions.
        </p>
      </motion.div>

      {/* Featured project */}
      <motion.article
        className="project-editorial-feature"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* Project number */}
        <div className="project-editorial-number">
          <span>01</span>
          <span>FEATURED PROJECT</span>
        </div>

        {/* Main project */}
        <div className="project-editorial-main">

          <div className="project-editorial-title">
            <h2>
              LOCAL AREA
              <br />
              <em>NEWS PORTAL.</em>
            </h2>

            <div className="project-editorial-arrow">
              <ArrowUpRight size={25} />
            </div>
          </div>

          <p className="project-editorial-description">
            A responsive local news portal with
            categorized content for sports, politics
            and local events, supported by an
            administrative panel.
          </p>

          {/* Technologies */}
          <div className="project-editorial-tech">
            <span className="project-editorial-tech-label">
              TECHNOLOGIES
            </span>

            <div className="project-editorial-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="project-editorial-details">

            <div>
              <span>01</span>
              <strong>ADMIN PANEL</strong>
              <p>
                Content management through a
                dedicated administration panel.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>RESPONSIVE DESIGN</strong>
              <p>
                Designed to work across desktop
                and mobile screen sizes.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>CATEGORIZED CONTENT</strong>
              <p>
                News organized across sports,
                politics and local events.
              </p>
            </div>

          </div>

        </div>

      </motion.article>

      {/* Closing */}
      <motion.div
        className="projects-editorial-closing"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>PROJECT FOCUS</span>

        <p>
          Building practical web experiences with
          a balance between visual design,
          responsiveness and functionality.
        </p>
      </motion.div>

    </section>
  );
}

export default Projects;