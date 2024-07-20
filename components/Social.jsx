import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/arielspencer/' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/arielspencer-log/' },
  { icon: <FaInstagram />, path: 'https://instagram.com/arielspencer.tech' },
  { icon: <FaWhatsapp />, path: 'https://wa.me/5511991007079' },
]

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link
          key={index}
          href={item.path}
          className={iconsStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social;