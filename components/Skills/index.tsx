import React from "react"
import Hrule from "../Hrule"
import Skill from "./Skill"
import { FullPage } from "../../types/cms"

import styles from "./Skills.module.scss"

type Props = {
  skills: FullPage["skills"]
}

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <div className={styles.Container}>
      <h2>Skills</h2>
      <div className={styles.SkillsStyle}>
        {skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} icon={skill.icon} />
        ))}
      </div>
      <Hrule />
    </div>
  )
}

export default Skills
