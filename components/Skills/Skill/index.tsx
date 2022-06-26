import Image from "next/image"
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
    <div className={styles.ImageContainer}>
      <Image
        src={icon}
        title={title}
        alt={icon}
        layout="responsive"
        height="100%"
        width="100%"
      />
    </div>
  </div>
  )
}

export default Skill
