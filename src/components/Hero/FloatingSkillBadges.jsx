import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaJs } from 'react-icons/fa6';
import { SiTailwindcss, SiWordpress } from 'react-icons/si';

function FloatingSkillBadges() {
  return (
    <>
      {/* Badge 1: SEO Specialist (Top-Left) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="absolute -top-3 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl glass-panel border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 shadow-xl hidden sm:flex"
      >
        <FaChartLine className="w-4 h-4 text-cyan-400" />
        <span>SEO Specialist</span>
      </motion.div>

      {/* Badge 2: WordPress Developer (Top-Right) */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-3 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl glass-panel border-sky-500/40 text-sky-300 text-xs font-mono flex items-center gap-1.5 shadow-xl hidden sm:flex"
      >
        <SiWordpress className="w-4 h-4 text-sky-400" />
        <span>WordPress Developer</span>
      </motion.div>

      {/* Badge 3: JavaScript ES6+ (Bottom-Left) */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-3 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl glass-panel border-amber-500/40 text-amber-300 text-xs font-mono flex items-center gap-1.5 shadow-xl hidden sm:flex"
      >
        <FaJs className="w-4 h-4 text-amber-400" />
        <span>JavaScript ES6+</span>
      </motion.div>

      {/* Badge 4: Tailwind CSS (Bottom-Right) */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-3 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl glass-panel border-cyan-400/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 shadow-xl hidden sm:flex"
      >
        <SiTailwindcss className="w-4 h-4 text-cyan-400" />
        <span>Tailwind CSS</span>
      </motion.div>
    </>
  );
}

export default memo(FloatingSkillBadges);
