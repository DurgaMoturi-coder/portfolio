import { memo } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import profileImg from '../../assets/images/Durga.jpeg';
import FloatingSkillBadges from './FloatingSkillBadges';

function FloatingProfileImage() {
  const { personalInfo } = portfolioData;

  return (
    <div className="relative flex justify-center items-center w-full my-6 lg:my-0 py-2">
      {/* Slow & Elegant Floating Motion Wrapper */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative group w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]"
      >
        {/* Subtle Blue & Purple Dual Ambient Glow Behind Image */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-purple-600/35 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

        {/* Glassmorphism Container Frame */}
        <div className="relative rounded-3xl p-3 sm:p-4 bg-slate-900/60 backdrop-blur-2xl border border-slate-700/70 shadow-2xl group-hover:border-cyan-500/40 transition-colors duration-300">

          {/* Floating Top Availability Badge inside Glass Frame */}
          <div className="flex items-center justify-between pointer-events-none mb-3">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-cyan-300 shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {personalInfo.location.flag} {personalInfo.location.city}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-300 font-semibold tracking-wider">
              PRO
            </span>
          </div>

          {/* Center Circular Profile Avatar with Ambient Glow & Gradient Ring */}
          <div className="relative mx-auto my-2 w-52 h-52 sm:w-60 sm:h-60 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 shadow-xl shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#070c1b] border-2 border-slate-900/90 relative">
              <img
                src={profileImg}
                alt={personalInfo.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Floating Bottom Name Overlay inside Glass Frame */}
          <div className="mt-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/90 flex items-center justify-between shadow-lg">
            <div>
              <h3 className="font-display font-bold text-sm text-white leading-tight">
                {personalInfo.name}
              </h3>
              <p className="text-[10px] font-mono text-slate-400">
                {personalInfo.role}
              </p>
            </div>
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center shrink-0 shadow-md">
              <span className="w-full h-full bg-[#070c1b] rounded-[7px] flex items-center justify-center font-display font-bold text-xs text-cyan-400">
                {personalInfo.monogram}
              </span>
            </span>
          </div>

        </div>

        {/* Modular Floating Skill Badges */}
        <FloatingSkillBadges />

      </motion.div>
    </div>
  );
}

export default memo(FloatingProfileImage);
