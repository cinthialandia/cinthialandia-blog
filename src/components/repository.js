import React from "react"
import "./repository.css"

const Repository = ({ repository }) => {
  return (
    <>
      <div className="project">
        <div className="card-container">
          <div className="photo">
            <img src={repository.openGraphImageUrl}></img>
          </div>

          <div className="repository-description">{repository.description}</div>
          <div className="container-repository-and-demo">
            <a href={repository.url} target="_blank">
              Repository
            </a>
            <a href={repository.homepageUrl} target="_blank">
              Live demo
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Repository
