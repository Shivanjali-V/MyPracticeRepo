import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {
  // Decide heading color based on status
  const headingStyle = {
    color: cohort.currentStatus.toLowerCase() === "ongoing" ? "green" : "blue",
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{cohort.name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
