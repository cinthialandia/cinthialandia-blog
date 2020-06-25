import React from "react"
import mecinthia from "./img/me-cinthia.png"
import "./bio.css"

const Bio = () => {
  return (
    <div>
      <div className="bio-img">
        <img className="bio-img-img" src={mecinthia} />
      </div>
      <div className="info-bio">
        <h1>Hi, I'm Cinthia!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          provident veniam reiciendis tempore nostrum dolorem nihil, est
          maiores, sapiente modi corrupti ipsum maxime voluptates voluptas
          inventore iusto aperiam ullam soluta?
        </p>
        <a
          className="button-primary"
          href={prefixUrl(`/portfolio/`)}
          target="_blank"
        >
          Live demo
        </a>
      </div>
    </div>
  )
}

export default Bio
