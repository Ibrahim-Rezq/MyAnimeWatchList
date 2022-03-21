import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import styles from '../css/Carosel.module.css';

const Carosel = ({ data }) => {
  return (
    <>
      <div className={styles.carosel}>
        <span className={`${styles.caroselRight} ${styles.caroselControl}`} />
        <div className={styles.innerCarosel}>
          {data.map((item) => {
            if (item)
              return (
                <section key={item.title} className={styles.caroselItem}>
                  <Card anime={item} />
                </section>
              );
          })}
        </div>
        <span className={`${styles.caroselLeft} ${styles.caroselControl}`} />
      </div>
    </>
  );
};

export default Carosel;
