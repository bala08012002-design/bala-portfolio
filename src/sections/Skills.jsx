import { motion } from "framer-motion";

function Skills() {
  const categories = [
    {
      title: "DEVELOPMENT",
      skills: [
        "Java",
        "Python",
        "SQL",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "PHP",
        "MySQL",
      ],
    },
    {
      title: "DESIGN",
      skills: [
        "Responsive Web Design",
        "Figma",
        "Adobe XD",
        "Adobe Photoshop",
        "Canva",
      ],
    },
    {
      title: "TOOLS",
      skills: [
        "GitHub",
        "MS Office",
        "Microsoft Excel",
      ],
    },
  ];

  return (
    <section className="skills-editorial">

      {/* HEADER */}
      <motion.div
        className="skills-editorial-heading"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>SKILLS</span>

        <h1>
          WHAT I
          <br />
          <em>WORK WITH.</em>
        </h1>
      </motion.div>

      {/* INTRO */}
      <motion.div
        className="skills-editorial-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          A combination of development, design and
          productivity tools used to turn ideas into
          practical digital experiences.
        </p>
      </motion.div>

      {/* SKILLS */}
      <div className="skills-editorial-list">

        {categories.map((category, categoryIndex) => (
          <motion.div
            className="skills-editorial-category"
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: categoryIndex * 0.12,
            }}
          >

            {/* CATEGORY */}
            <div className="skills-editorial-category-title">
              <span>0{categoryIndex + 1}</span>

              <h2>{category.title}</h2>
            </div>

            {/* ITEMS */}
            <div className="skills-editorial-items">

              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  className="skills-editorial-item"
                  key={skill}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: skillIndex * 0.05,
                  }}
                >

                  <div className="skill-name">
                    <span>{skill}</span>

                    {/* Decorative level animation */}
                    <div className="skill-level">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>

                  <span className="skills-arrow">
                    ↗
                  </span>

                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}

      </div>

      {/* CLOSING */}
      <motion.div
        className="skills-editorial-closing"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>DESIGN × DEVELOPMENT</span>

        <p>
          Combining visual thinking with technical
          implementation to create responsive
          digital experiences.
        </p>
      </motion.div>

    </section>
  );
}

export default Skills;