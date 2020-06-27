import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import "./layout.scss"
import australiasvg from "./img/australia.svg"
import spainsvg from "./img/spain.svg"
import cinthialandia from "./img/logito-edit.png"
import { faBars, faTimes, faBug } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const LangSelect = ({ lang }) =>
  lang === "es" ? (
    <Link to={`/`}>
      <span className="flag">
        <img src={australiasvg} alt="australian flag" />
        <span>English</span>
      </span>
    </Link>
  ) : (
    <Link to={`/es/`}>
      <span className="flag">
        <img src={spainsvg} alt="spain flag" />
        <span>Español</span>
      </span>
    </Link>
  )

export default function Layout({ children, lang }) {
  const [menuOpen, setMenuOpen] = useState(true)

  const prefixUrl = url => {
    return lang && lang !== "en" ? `/${lang}${url}` : url
  }

  return (
    <>
      <header className={menuOpen ? "open" : ""}>
        <div className="nav-button-container">
          <Link className="nav-home" to={prefixUrl(`/`)}>
            <img src={cinthialandia} alt="logo cinthialandia" />
          </Link>
          <button
            className="nav-button-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <nav>
          <Link className="nav-blog" to={prefixUrl(`/blog/`)}>
            Blog
          </Link>
          <Link className="nav-portfolio" to={prefixUrl(`/portfolio/`)}>
            Portfolio
          </Link>
        </nav>
        <div className="lang-select">
          <LangSelect lang={lang} />
        </div>
      </header>
      {children}
      <div className="footer-container-background">
        <div className="footer-container">
          <a
            href={`https://github.com/cinthialandia/cinthialandia-blog/pulls`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faBug} /> Submit on issue
          </a>

          <p>CINTHIALANDIA</p>

          <div className="social-footer">
            <a
              href={`https://github.com/cinthialandia`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={`https://www.linkedin.com/in/cinthiaj/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href={`https://twitter.com/_cinthialandia`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
