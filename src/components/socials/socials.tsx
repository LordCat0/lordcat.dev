import Box from '../box/box';
import styles from './socials.module.css';

interface SocialLinkProps {
  icon: string;
  name: string;
  href: string;
}

function SocialLink(props: SocialLinkProps) {
  return (
    <li>
      <a href={props.href} className={styles.socialItem}>
        <img
          src={props.icon}
          width={25}
          height={25}
          draggable={false}
        />
        <span>{props.name}</span>
      </a>
    </li>
  )
}

function Socials() {
  return (
    <Box className={styles.socials}>
      <span>Socials</span>
      <ul>
        <SocialLink
          icon='/assets/github.svg'
          name='GitHub'
          href='https://github.com/LordCat0'
        />
        <SocialLink
          icon='/assets/discord.svg'
          name='Discord'
          href='http://discord.com/users/1164322893438648401'
        />
      </ul>
    </Box>
  )
}

export default Socials;