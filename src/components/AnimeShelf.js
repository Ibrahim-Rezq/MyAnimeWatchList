import React from 'react';
import Card from './Card';
import styles from '../css/AnimeShelf.module.css';

const AnimeShelf = ({ data }) => {
  return (
    <>
      <section className={styles.grid}>
        {data.map((anime) => {
          if (anime) return <Card key={anime.title} anime={anime} />;
        })}
      </section>
    </>
  );
};

export default AnimeShelf;
