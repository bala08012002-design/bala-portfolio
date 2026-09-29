import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

function Contact() {
  const contacts = [
    {
      label: "EMAIL",
      value: "bala08012002@gmail.com",
      href: "mailto:bala08012002@gmail.com",
      icon: Mail,
    },
    {
      label: "PHONE",
      value: "+91 8056740325",
      href: "tel:+918056740325",
      icon: Phone,
    },
    {
      label: "LINKEDIN",
      value: "BALA SUBRAMANIAN V",
      href: "https://linkedin.com/in/bala-subramanian-v-15b93a313",
      icon: Linkedin,
      external: true,
    },
    {
      label: "GITHUB",
      value: "BALA08012002-DESIGN",
      href: "https://github.com/bala08012002-design",
      icon: Github,
      external: true,
    },
  ];

  return (
    <section className="contact-editorial">

      {/* Heading */}
      <motion.div
        className="contact-editorial-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>CONTACT</span>

        <h1>
          LET'S
          <br />
          <em>TALK.</em>
        </h1>
      </motion.div>

      {/* Intro */}
      <motion.div
        className="contact-editorial-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Have a project, opportunity or idea in mind?
          Let's connect and build something meaningful
          together.
        </p>
      </motion.div>

      {/* Contact links */}
      <div className="contact-editorial-list">

        {contacts.map((contact, index) => {
          const Icon = contact.icon;

          return (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="contact-editorial-item"
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="contact-editorial-left">

                <span className="contact-editorial-number">
                  0{index + 1}
                </span>

                <div className="contact-editorial-icon">
                  <Icon size={18} strokeWidth={1.6} />
                </div>

              </div>

              <div className="contact-editorial-info">
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </div>

              <ArrowUpRight
                className="contact-editorial-arrow"
                size={22}
              />
            </motion.a>
          );
        })}

      </div>

      {/* Footer */}
      <motion.div
        className="contact-editorial-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>BSV</span>

        <span>
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <span>© 2026</span>
      </motion.div>

    </section>
  );
}

export default Contact;