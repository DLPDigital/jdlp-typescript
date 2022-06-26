import React from "react"
import Image from "next/image"

import styles from "./NavBar.module.scss"
import Link from "next/link"

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className={styles.NavContainer}>
        <div className={styles.Logo}>
          <Link href="/" title="jdlp.co.uk">
            <a>
              <div className={styles.ImageContainer}>
                <Image
                  className={styles.NavbarLogo}
                  src="/images/jdlp-logo-white.png"
                  alt="jdlp.co.uk"
                  title="jdlp-logo-white.png"
                  height="100%"
                  width="100%"
                  layout="responsive"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.NavItems}>
          <ul>
            <li>
              <Link href="#experience" title="Experience">
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link href="#contact" title="Contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.LinkedIn}>
          <a
            href="https://www.linkedin.com/in/dominic-ladden-powell/"
            title="View on LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
