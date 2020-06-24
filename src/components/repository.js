import React from "react"
import "./repository.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Repository = ({ repository }) => {
  return (
    <div className="repository-container">
      <div className="repository-photo">
        <img src={repository.openGraphImageUrl}></img>
      </div>
      <div className="repository-info-container">
        <div className="repository-link">
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a href={repository.url} target="_blank">
            {repository.url}
          </a>
        </div>
        <div clasName="repository-name">{repository.name}</div>
        <div className="repository-description">{repository.description}</div>
        <a
          className="button-primary"
          href={repository.homepageUrl}
          target="_blank"
        >
          Live demo
        </a>
      </div>
    </div>
  )
}

export default Repository
