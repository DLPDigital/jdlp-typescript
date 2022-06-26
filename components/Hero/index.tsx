import React from "react"
import Image from "next/image"

import styles from "./Hero.module.scss"
import Hrule from "../Hrule"

const Hero: React.FC = () => {
  return (
    <>
      <div className={styles.Logo}>
        <div className={styles.ImageContainer}>
          <Image
            src="/images/jdlp-logo-dark.png"
            alt="JDLP.co.uk"
            title="jdlp-logo.png"
            height="100%"
            width="100%"
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.Header}>
        <h1>Dominic Ladden&#8209;Powell</h1>
        <h2>Digital Content Specialist</h2>
        <Hrule />
      </div>
      <div className={styles.Statement}>
        <h2>Bio</h2>
        <p>
          End to end digital content specialist experienced in SEO,
          content marketing, website development and management, digital
          strategy and organic growth.
        </p>
        <Hrule />
      </div>
    </>
  )
}

export default Hero
