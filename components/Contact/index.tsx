import React from "react"
import Hrule from "../Hrule"

import styles from "./Contact.module.scss"

const Contact: React.FC = () => {
  return (
    <div className={styles.ContactPanel}>
    <h2 id="contact">Contact</h2>
    <div className={styles.ContactPointStyle}>
      <div className={styles.Where}>
        Address:
      </div>
      <div className={styles.What}>
        Brixton, London
      </div>
    </div>
    <div className={styles.ContactPointStyle}>
      <div className={styles.Where}>
        GitHub:
      </div>
      <div className={styles.What}>
        <a
          href="https://github.com/DLPDigital"
          title="View on GitHub"
          target="_blank"
          rel="noreferrer"
          className={styles.GitHub}
        >
          <i />
        </a>
      </div>
    </div>
    <div className={styles.ContactPointStyle}>
      <div className={styles.Where}>
        LinkedIn:
      </div>
      <div className={styles.What}>
        <a
          href="https://www.linkedin.com/in/dominic-ladden-powell/"
          title="View on LinkedIn"
          target="_blank"
          rel="noreferrer"
          className={styles.LinkedIn}
        >
          <i />
        </a>
      </div>
    </div>
    <Hrule />
  </div>
  )
}

export default Contact
