import { useEffect, useRef, memo } from "react";

function StarsCanvas({ nombreEtoile }) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  const isMobileDevice = /iPhone|Android|Samsung/i.test(navigator.userAgent);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
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
      setCanvasSize();

      if (!starsRef.current.length) {
        starsRef.current = generateStars();
      }

      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          setCanvasSize();

          starsRef.current.forEach((s) => {
            if (s.x > canvas.width) s.x = canvas.width - 1;
            if (s.y > canvas.height) s.y = canvas.height - 1;
          });
        }, 150);
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.body);
      window.addEventListener("resize", handleResize);

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        for (const star of starsRef.current) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      const update = () => {
        for (const star of starsRef.current) {
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
        resizeObserver.disconnect();
        window.removeEventListener("resize", handleResize);
      };
    }

    setCanvasSize();
    starsRef.current = generateStars();

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

    const resizeDesktop = () => {
      setCanvasSize();
    };

    const resizeObserver = new ResizeObserver(resizeDesktop);
    resizeObserver.observe(document.body);
    window.addEventListener("resize", resizeDesktop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeDesktop);
    };
  }, [nombreEtoile, isMobileDevice]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none touch-none select-none"
      style={{ touchAction: "none", pointerEvents: "none" }}
    />
  );
}

export default memo(StarsCanvas);
