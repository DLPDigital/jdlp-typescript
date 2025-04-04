import React from "react"
import Image from "next/image"

import styles from "./Hero.module.scss"
import Hrule from "../Hrule"
import { FullPage } from "../../types/cms"

type Props = {
  title: FullPage["title"]
  headline: FullPage["headline"]
  bio: FullPage["bio"]
}

const Hero: React.FC<Props> = ({ title, headline, bio }) => {
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
        <h1>{title}</h1>
        <h2>{headline}</h2>
        <Hrule />
      </div>
      <div className={styles.Statement}>
        <h2>Bio</h2>
        <p>
          {bio}
        </p>
        <Hrule />
      </div>
    </>
  )
}

export default Hero
