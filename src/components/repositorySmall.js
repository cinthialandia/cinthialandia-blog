import React from "react"
import "./repositorySmall.scss"

const RepositorySmall = ({ repository }) => {
  return (
    <div className="repositorySmall-container">
      <div className="repositorySmall-photo">
        <img src={repository.openGraphImageUrl}></img>
      </div>
      <div className="repositorySmallInfo">
        <h2 className="repositorySmall-name">{repository.name}</h2>
      </div>
    </div>
  )
}

export default RepositorySmall
