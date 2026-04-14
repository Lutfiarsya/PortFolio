import { Icon } from '@iconify/react'

const contacts = [
  {
    href: 'mailto:lutfiarsya34@gmail.com',
    label: 'Gmail',
    value: 'lutfiarsya34@gmail.com',
    icon: 'logos:google-gmail',
    bg: 'bg-red-50',
  },
  {
    href: 'http://wa.me/6285774301300',
    label: 'WhatsApp',
    value: '+62 857-7430-1300',
    icon: 'logos:whatsapp-icon',
    bg: 'bg-green-50',
  },
  {
    href: 'https://www.linkedin.com/in/luthfie-arsya-darmaputra-3641b6208/',
    label: 'LinkedIn',
    value: 'Luthfie Arsya Darmaputra',
    icon: 'logos:linkedin-icon',
    bg: 'bg-blue-50',
  },
  {
    href: 'https://www.instagram.com/lutfrsya/',
    label: 'Instagram',
    value: '@lutfrsya',
    icon: 'skill-icons:instagram',
    bg: 'bg-pink-50',
  },
]

const Contact = ({ IntoPage }) => {
  return (
    <footer ref={IntoPage} className="w-full bg-[#0f0f0f] text-white px-8 pt-14 pb-6">

      <div className="flex flex-wrap gap-8 justify-between mb-12">

        <div className="max-w-xs">
          <h2 className="text-xl font-medium text-white mb-2">Luthfie Arsya</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Frontend Developer & UI Enthusiast. Open to collaborations,
            freelance projects, and full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {contacts.map(({ href, label, value, icon, bg }) => (
           <a 
              key={label}
              href={href}
              className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3.5 py-3 hover:bg-[#222] hover:border-[#444] transition-all duration-300"
            >
              <div className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center shrink-0`}>
                <Icon icon={icon} className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-600 mb-0.5">{label}</p>
                <h3 className="text-xs font-medium text-gray-300 truncate max-w-[120px]">{value}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      <hr className="border-t border-[#222] mb-5" />

      <div className="flex flex-wrap justify-between items-center gap-2">
        <p className="text-xs text-gray-600">
          © 2025 Luthfie Arsya Darmaputra. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
          Available for work
        </div>
      </div>

    </footer>
  )
}

export default Contact