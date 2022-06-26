import React from "react"
import dateFormatted from "../../../utils/dateFormatted";

import styles from "./JobDetails.module.scss"

type JobDetails = {
  title: string,
  company: string,
  start: string,
  end: string,
  location: string,
  html: string,
};

const JobDetails: React.FC<JobDetails> = ({
  title,
  company,
  start,
  end,
  location,
  html,
}) => {
  return (
  <div className={styles.JobListing}>
    <h3>{title} | {company}</h3>
    <h4>{dateFormatted(start)} - {dateFormatted(end)}</h4>
    <h4>{location}</h4>
    <div
      className={styles.JobContent}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)}

export default JobDetails
