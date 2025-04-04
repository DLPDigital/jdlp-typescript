import React from "react"
import Hrule from "../Hrule"

import styles from "./Experience.module.scss"
import JobDetails from "./JobDetails"
import { FullPage } from "../../types/cms"

type Props = {
  experiences: FullPage["experience"]
}

const Experience: React.FC<Props> = ({ experiences }) => {
  console.log("Experience", experiences)
  return (
    <div className={styles.ExperienceContainer}>
      <h2 id="experience">Experience</h2>
      {
        experiences.map((experience) => {
          return (
            <JobDetails
              key={experience.jobTitle}
              title={experience.jobTitle}
              company={experience.company}
              tenure={experience.tenure}
              location={experience.location}
              details={experience.details}
            />
          )
        })
      }
      <Hrule />
    </div>
  )
}

export default Experience
