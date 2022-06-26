import React from "react"
import Hrule from "../Hrule"
import Skill from "./Skill"

import styles from "./Skills.module.scss"

const Skills: React.FC = () => {
  return (
    <div className={styles.Container}>
      <h2>Skills</h2>
      <div className={styles.SkillsStyle}>
        <Skill
          title="SEO / Organic Growth"
          icon="/images/skills/seo.svg"
        />
        <Skill
          title="Content Strategy"
          icon="/images/skills/strategy.svg"
        />
        <Skill
          title="Content Marketing"
          icon="/images/skills/content-marketing.svg"
        />
        <Skill
          title="CMS Migration"
          icon="/images/skills/cms.svg"
        />
        <Skill
          title="HTML / CSS"
          icon="/images/skills/html.svg"
        />
        <Skill
          title="REACT"
          icon="/images/skills/react.svg"
        />
      </div>
      <Hrule />
  </div>
  )
}

export default Skills
