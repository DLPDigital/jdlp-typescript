import React from "react"
import { ExperienceProps } from "../../utils/exportTypes"
import Hrule from "../Hrule"

import styles from "./Experience.module.scss"
import JobDetails from "./JobDetails"

type Props = {
  experienceMarkdown: ExperienceProps[]
}

const Experience: React.FC<Props> = ({ experienceMarkdown }) => {
  return (
    <div className={styles.ExperienceContainer}>
      <h2 id="experience">Experience</h2>
      {
        experienceMarkdown.map(({ data, content }) => {
          return (
            <JobDetails
              key={data.title}
              title={data.title}
              company={data.company}
              start={data.start}
              end={data.end}
              location={data.location}
              html={content}
            />
          )
        })
      }
      <Hrule />
    </div>
  )
}

export default Experience
