import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h2 className={styles.sectionTitle}>
        Explore My <span className={styles.highlight}>Experience</span>
      </h2>
      <div className={styles.experienceContainer}>
        <div className={styles.experienceBox}>
          <h3>Frontend Development</h3>
          <div className={styles.experienceContent}>
            <div className={styles.experienceItem}>
              <i className="icon-html5"></i>
              <p>
                HTML <span>Experienced</span>
              </p>
            </div>
            <div className={styles.experienceItem}>
              <i className="icon-css3"></i>
              <p>
                CSS <span>Intermediate</span>
              </p>
            </div>
            <div className={styles.experienceItem}>
              <i className="icon-javascript"></i>
              <p>
                JavaScript <span>Basic</span>
              </p>
            </div>
            <div className={styles.experienceItem}>
              <i className="icon-react"></i>
              <p>
                React JS <span>Basic</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.experienceBox}>
          <h3>Software Development</h3>
          <div className={styles.experienceContent}>
            <div className={styles.experienceItem}>
              <i className="icon-cplusplus"></i>
              <p>
                C++ <span>Experienced</span>
              </p>
            </div>
            <div className={styles.experienceItem}>
              <i className="icon-java"></i>
              <p>
                Java <span>Intermediate</span>
              </p>
            </div>
            <div className={styles.experienceItem}>
              <i className="icon-python"></i>
              <p>
                Python <span>Intermediate</span>
              </p>
            </div>
            <div className={styles.experienceItem}>
              <i className="icon-sql"></i>
              <p>
                SQL <span>Intermediate</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
