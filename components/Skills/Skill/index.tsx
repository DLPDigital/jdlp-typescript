import Image from "next/image"
import React from "react"

import styles from "./Skill.module.scss"
import { Icon } from "../../../types/cms"

type Props = {
  title: string
  icon:Icon
}

const Skill: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className={styles.SkillStyle}>
    <h5>{title}</h5>
    <div className={styles.ImageContainer}>
      <Image
        src={`https:${icon.src}`}
        title={title}
        alt={icon.title}
        layout="responsive"
        height="100%"
        width="100%"
      />
    </div>
  </div>
  )
}

export default Skill
