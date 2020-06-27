import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import "./repository.scss"

const Repository = ({ repository }) => {
  return (
    <div className="repository-container">
      <div className="repository-photo">
        <img src={repository.openGraphImageUrl} alt="img-repository"></img>
      </div>
      <div className="repository-info-container">
        <div className="repository-link">
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a
            className="repository-link"
            href={repository.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repository.url}
          </a>
        </div>
        <div>
          <h2 className="repository-name">{repository.name}</h2>
          <p className="repository-description">{repository.description}</p>
        </div>
        <a
          className="button-primary"
          href={repository.homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo
        </a>
      </div>
    </div>
  )
}

export default Repository
