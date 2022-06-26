import React, { ReactElement } from "react"
import { NextSeo } from 'next-seo'
import Footer from "../Footer"
import NavBar from "../NavBar"

import styles from "./Container.module.scss"

type Props = {
  children: ReactElement[]
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NextSeo
        title="Online Portfolio and CV of Dominic Ladden-Powell | jdlp.co.uk"
        description="Hi, thanks for visiting my site. Take a look around and let me know what you think."
      />
      <NavBar />
      <div className={styles.MainSection}>
        {children}
        <div className={styles.References}>
          <p>References available on request</p>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Container
