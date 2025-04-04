import React from "react";
import Hrule from "../Hrule";
import Skill from "./Skill";

import styles from "./Skills.module.scss";

const Skills: React.FC = () => {
  return (
    <div className={styles.Container}>
      <h2>Skills</h2>
      <div className={styles.SkillsStyle}>
        <Skill title="REACT" icon="/images/skills/react.svg" />
        <Skill title="Typescript" icon="/images/skills/typescript.svg" />
        <Skill title="TDD" icon="/images/skills/tdd.svg" />
        <Skill title="Migration" icon="/images/skills/cms.svg" />
        <Skill title="SEO" icon="/images/skills/seo.svg" />
        <Skill title="GEO" icon="/images/skills/geo.svg" />
      </div>
      <Hrule />
    </div>
  );
};

export default Skills;
