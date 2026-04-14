import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const ProjectComp = ({ Title, Img, Desc, Link, LinkProject, id, LinkRepo, delay, badge }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay }}
      viewport={{ amount: 'some' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(v => !v)}
      className="group relative bg-[#111] border border-[#2a2a2a] hover:border-[#555] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 w-full md:w-[340px]"
      id={id}
    >
      {/* Top */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div>
          <h2 className="text-[15px] font-medium text-[#f0f0f0] mb-1">{Title}</h2>
          {badge && (
            <span className="text-[10px] bg-[#1e1e1e] text-[#888] border border-[#333] px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>

        <div className="w-11 h-11 bg-[#1e1e1e] border border-[#333] rounded-xl flex items-center justify-center">
          <img 
            src={Img} 
            alt={Title || "project image"} 
            className="object-center object-contain"
          />
        </div>
      </div>

      <hr className="border-t border-[#1f1f1f]" />

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={hovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:!opacity-100 md:!h-auto overflow-hidden"
      >
        <div className="px-5 pt-4 pb-5 flex flex-col gap-4">
          <p className="text-[12px] text-[#666] leading-relaxed line-clamp-4">{Desc}</p>

          <div className="flex items-center justify-between">
            <a
              href={Link}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-[12px] text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
            >
              {LinkProject}
              <Icon icon="mdi:arrow-top-right" width={12} />
            </a>

            <a
              href={LinkRepo}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="w-7 h-7 bg-[#1a1a1a] border border-[#333] rounded-lg flex items-center justify-center hover:bg-[#252525] transition-colors"
            >
              <Icon icon="mdi:github" width={14} className="text-[#aaa]" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectComp