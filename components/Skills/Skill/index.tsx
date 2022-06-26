import React from "react"

import styles from "./Skill.module.scss"

type Props = {
  title: string
  icon: string
}

const Skill: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className={styles.SkillStyle}>
    <h5>{title}</h5>
    <img
      src={icon}
      title={title}
      alt={icon}
    />
  </div>
  )
}

export default Skill
