import { Trophy, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <section className="achievements-editorial">

      {/* Heading */}
      <motion.div
        className="achievements-editorial-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>ACHIEVEMENT</span>

        <h1>
          BUILT TO
          <br />
          <em>COMPETE.</em>
        </h1>
      </motion.div>

      {/* Intro */}
      <motion.div
        className="achievements-editorial-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          A competitive achievement that reflects
          teamwork, leadership and the ability to
          perform in a challenging environment.
        </p>
      </motion.div>

      {/* Achievement */}
      <motion.article
        className="achievement-editorial-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="achievement-editorial-top">
          <span>01</span>
          <span>2023</span>
        </div>

        <div className="achievement-editorial-content">

          <div className="achievement-editorial-icon">
            <Trophy size={28} strokeWidth={1.5} />
          </div>

          <div className="achievement-editorial-main">

            <span className="achievement-editorial-label">
              INTER-COLLEGE E-SPORTS COMPETITION
            </span>

            <h2>
              1ST
              <br />
              <em>PLACE.</em>
            </h2>

            <p>
              Winner of an inter-college E-Sports
              competition, securing first place among
              more than 15 college teams.
            </p>

          </div>

          <div className="achievement-editorial-arrow">
            <ArrowUpRight size={24} />
          </div>

        </div>

        <div className="achievement-editorial-bottom">
          <span>WINNER</span>
          <span>15+ COLLEGE TEAMS</span>
          <span>E-SPORTS</span>
        </div>

      </motion.article>

      {/* Closing */}
      <motion.div
        className="achievements-editorial-closing"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>LEADERSHIP & COMPETITION</span>

        <p>
          The achievement also reflects experience
          working as part of a team and leading a
          four-member mini-project team.
        </p>
      </motion.div>

    </section>
  );
}

export default Achievements;