import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import "./layout.scss"
import australiasvg from "./img/australia.svg"
import spainsvg from "./img/spain.svg"
import cinthialandia from "./img/logito-edit.png"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const LangSelect = ({ lang }) =>
  lang === "es" ? (
    <Link to={`/`}>
      <span className="flag">
        <img src={australiasvg} />
        <span>English</span>
      </span>
    </Link>
  ) : (
    <Link to={`/es/`}>
      <span className="flag">
        <img src={spainsvg} />
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
            <img src={cinthialandia} />
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
    </>
  )
}
