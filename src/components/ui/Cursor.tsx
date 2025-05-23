import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleLinkHoverStart = () => setHoveredLink(true);
    const handleLinkHoverEnd = () => setHoveredLink(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', () => setVisible(false));

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setVisible(false);
      document.documentElement.style.cursor = 'auto';
    } else {
      document.documentElement.style.cursor = 'none';
    }
  }, []);

  return (
    <div className={`${visible ? 'block' : 'hidden'} md:block pointer-events-none fixed z-[9999]`}>
      <motion.div
        className="fixed top-0 left-0 z-50"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.6 : hoveredLink ? 1.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <div
          className={`
            w-8 h-8 bg-blue-400 dark:bg-cyan-300 opacity-70
            backdrop-blur-md
            transition-all duration-500 ease-in-out
            animate-morph
          `}
          style={{
            borderRadius: '40% 60% 55% 45% / 40% 45% 55% 60%',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          }}
        />
      </motion.div>

      <style>{`
        @keyframes morph {
          0% {
            border-radius: 40% 60% 55% 45% / 40% 45% 55% 60%;
          }
          50% {
            border-radius: 60% 40% 45% 55% / 60% 55% 45% 40%;
          }
          100% {
            border-radius: 40% 60% 55% 45% / 40% 45% 55% 60%;
          }
        }
        .animate-morph {
          animation: morph 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Cursor;
