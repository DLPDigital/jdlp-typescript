import React from "react"

import styles from "./JobDetails.module.scss"
import { createMarkup } from "../../../utils/createMarkup";

type JobDetails = {
  title: string,
  company: string,
  location: string,
  details: string,
  tenure: string
};

const JobDetails: React.FC<JobDetails> = ({
  title,
  company,
  location,
  details,
  tenure,
}) => {
  return (
  <div className={styles.JobListing}>
    <h3>{title} | {company}</h3>
    <h4>{tenure}</h4>
    <h4>{location}</h4>
    <div
      className={styles.JobContent}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={createMarkup(details)}
    />
  </div>
)}

export default JobDetails
