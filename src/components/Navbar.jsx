import { NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = useNavigate();

  const pages = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "SKILLS", path: "/skills" },
    { label: "EXPERIENCE", path: "/experience" },
    { label: "PROJECTS", path: "/projects" },
    { label: "ACHIEVEMENTS", path: "/achievements" },
    { label: "EDUCATION", path: "/education" },
    { label: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    const message =
      "Hi Bala, I found your portfolio and would like to connect.";

    const whatsappUrl = `https://wa.me/918056740325?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="advanced-navbar">
        {/* BRAND */}
        <button
          className="advanced-brand"
          onClick={() => handleNavigation("/")}
          aria-label="Go to home"
        >
          <span className="brand-mark">BSV</span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="advanced-nav">
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              end={page.path === "/"}
              className={({ isActive }) =>
                `advanced-nav-item ${
                  isActive ? "active" : ""
                }`
              }
              onClick={() => {
                setMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <span className="nav-label">
                {page.label}
              </span>

              <span className="nav-active-line" />
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="advanced-nav-right">
          {/* AVAILABILITY */}
          <div className="availability-mini">
            <span />
            AVAILABLE
          </div>

          {/* WHATSAPP BUTTON */}
          <button
            className="nav-talk"
            onClick={openWhatsApp}
          >
            LET'S TALK
            <ArrowUpRight size={15} />
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          className="advanced-mobile-menu"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {pages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.04,
                duration: 0.25,
              }}
            >
              <NavLink
                to={page.path}
                end={page.path === "/"}
                onClick={() => {
                  setMenuOpen(false);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {page.label}
              </NavLink>
            </motion.div>
          ))}

          {/* MOBILE WHATSAPP */}
          <motion.button
            className="mobile-whatsapp-button"
            onClick={openWhatsApp}
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: pages.length * 0.04,
              duration: 0.25,
            }}
          >
            LET'S TALK
            <ArrowUpRight size={17} />
          </motion.button>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;