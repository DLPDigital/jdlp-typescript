import React from "react";

import styles from "./Footer.module.scss";

const getDate = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

const Footer: React.FC = () => {
  return (
    <div className={styles.FooterStyles}>
      <div className={styles.Content}>
        <p>&#169; jdlp.co.uk {getDate()}</p>
        <p>
          Built with Contentful, Next.js -{" "}
          <a
            href="https://github.com/DLPDigital/jdlp-typescript"
            target="_blank"
            title="View JDLP repo on GitHub"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
