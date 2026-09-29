import { useEffect, useRef, useState } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let animationFrame;

    let mouseX = -100;
    let mouseY = -100;

    let currentX = -100;
    let currentY = -100;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const element =
        event.target instanceof Element ? event.target : null;

      const interactive = element?.closest(
        "a, button, input, textarea"
      );

      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${
        hovering ? "custom-cursor-hover" : ""
      }`}
    >
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-dot" />
    </div>
  );
}

export default Cursor;