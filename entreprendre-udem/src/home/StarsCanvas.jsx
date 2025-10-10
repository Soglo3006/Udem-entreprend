import { useEffect, useRef } from "react";

export default function StarsCanvas({ nombreEtoile }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  const isMobileDevice = /iPhone|Android|Samsung/i.test(navigator.userAgent);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    console.log(isMobileDevice ? "mobile" : "desktop");

    const resize = () => {
      canvas.width = document.documentElement.scrollWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const generateStars = () => {
      return Array.from({ length: nombreEtoile }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      }));
    };

    if (isMobileDevice) {
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(document.body);
      window.addEventListener("resize", resize);

      const stars = generateStars();

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        for (const star of stars) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      const update = () => {
        for (const star of stars) {
          star.x += star.dx;
          star.y += star.dy;
          if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
          if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
        }
      };

      let animationFrameId;
      const animate = () => {
        draw();
        update();
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", resize);
        observer.disconnect();
      };
    }

    const lockScroll = (e) => e.preventDefault();
    canvas.addEventListener("touchmove", lockScroll, { passive: false });

    const preventTouch = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    canvas.addEventListener("touchstart", preventTouch, { passive: false });
    canvas.addEventListener("touchend", preventTouch, { passive: false });

    const resizeDesktop = () => {
      canvas.width = document.documentElement.scrollWidth;
      canvas.height = document.documentElement.scrollHeight;
      starsRef.current = generateStars();
    };

    resizeDesktop();
    window.addEventListener("resize", resizeDesktop);

    const drawDesktop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      for (const star of starsRef.current) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const updateDesktop = () => {
      for (const star of starsRef.current) {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      }
    };

    let animationFrameId;
    const animateDesktop = () => {
      drawDesktop();
      updateDesktop();
      animationFrameId = requestAnimationFrame(animateDesktop);
    };
    animateDesktop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeDesktop);
      canvas.removeEventListener("touchstart", preventTouch);
      canvas.removeEventListener("touchmove", preventTouch);
      canvas.removeEventListener("touchend", preventTouch);
    };
  }, isMobileDevice ? [] : [nombreEtoile]); 

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none touch-none select-none"
      style={{ touchAction: "none", pointerEvents: "none" }}
    />
  );
}
