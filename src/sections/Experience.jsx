import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function Experience() {
  const experience = [
    {
      number: "01",
      period: "01 YEAR",
      role: "PRODUCT TECHNICIAN",
      company: "TATA PEGATRON",
      location: "CHENNAI",
      description:
        "Worked in a professional technical environment, gaining practical experience in product operations, problem solving and workplace processes.",
    },
    {
      number: "02",
      period: "06 MONTHS",
      role: "DIGITAL MARKETING",
      company: "WE BEE TECH",
      location: "TIRUNELVELI",
      description:
        "Worked on digital marketing activities and gained experience in creative digital work, online communication and practical marketing processes.",
    },
  ];

  return (
    <section className="experience-editorial">

      {/* HEADER */}
      <motion.div
        className="experience-editorial-heading"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>MY EXPERIENCE</span>

        <h1>
          WORK
          <br />
          <em>EXPERIENCE.</em>
        </h1>
      </motion.div>

      {/* INTRO */}
      <motion.div
        className="experience-editorial-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p>
          My professional journey combines technical
          experience with digital creativity, giving me
          a practical understanding of both technology
          and digital work.
        </p>
      </motion.div>

      {/* EXPERIENCE */}
      <div className="experience-editorial-list">

        {experience.map((item, index) => (
          <motion.article
            className="experience-editorial-item"
            key={item.company}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
          >

            {/* NUMBER + PERIOD */}
            <div className="experience-editorial-period">
              <span>{item.number}</span>

              <strong>{item.period}</strong>
            </div>

            {/* EXPERIENCE CONTENT */}
            <div className="experience-editorial-main">

              <div className="experience-editorial-company">
                <span>ROLE</span>
                <h2>{item.role}</h2>
              </div>

              <h3>{item.company}</h3>

              <div className="experience-editorial-location">
                <MapPin size={13} />
                <span>{item.location}</span>
              </div>

              <p className="experience-editorial-description">
                {item.description}
              </p>

            </div>

            {/* ARROW */}
            <div className="experience-editorial-arrow">
              <ArrowUpRight size={25} />
            </div>

          </motion.article>
        ))}

      </div>

      {/* BOTTOM STATEMENT */}
      <motion.div
        className="experience-editorial-closing"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>PROFESSIONAL JOURNEY</span>

        <p>
          From technical operations to digital marketing,
          each experience has helped me develop practical
          skills, creative thinking and a stronger approach
          to digital work.
        </p>
      </motion.div>

    </section>
  );
}

export default Experience;