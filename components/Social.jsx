import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    path: 'https://github.com/arielspencer/'
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/arielspencer-log/'
  },
  {
    id: 3,
    icon: <FaInstagram />,
    path: 'https://instagram.com/arielspencer.tech'
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    path: 'https://wa.me/5511991007079'
  },
]

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((socials) => {
        return <Link
          key={socials.id}
          href={socials.path}
          className={iconsStyles}>
          {socials.icon}
        </Link>
      })}
    </div>
  )
}

export default Social;