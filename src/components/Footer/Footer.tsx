import { Container } from './styles'

import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Profile</span>
      </a>
      <div className="social-media">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
