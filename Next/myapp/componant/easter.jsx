import React from "react";
import styles from "@/styles/Home.module.css";

export default function Ricky(){
    return(
<video>
  <div className={styles.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/watch?v=xvFZjo5PgG0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </video>
    )
};
