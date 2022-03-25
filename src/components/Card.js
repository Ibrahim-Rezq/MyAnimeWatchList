import Image from 'next/image';
import Link from 'next/link';
import styles from '../css/Card.module.css';
import { post } from '../utils/DataStoreAPI';

const Card = ({ anime }) => {
  const { images, title, synopsis, rank, score, mal_id } = anime;
  return (
    <>
      <section>
        <article className={styles.card}>
          <Link href={`/Anime/AnimeInfo/${mal_id}`}>
            <a>
              <figure>
                <Image
                  src={images.jpg.image_url}
                  width='256'
                  height='358'
                  alt='hi'
                />
                <figcaption>
                  {title.slice(0, 25)}
                  {title.length > 26 && '...'}
                </figcaption>
              </figure>
            </a>
          </Link>
          <footer className={styles.cardBody}>
            <section>
              <h5>
                Rank:
                <span style={{ color: 'var(--primary)' }}>
                  {' '}
                  {rank || 'Unranked'}
                </span>{' '}
                Score:
                <span style={{ color: 'var(--primary)' }}>
                  {' '}
                  {score || 'UnScored'}/10
                </span>
              </h5>
              <p>
                {(synopsis && synopsis.slice(0, 150)) || 'No discription found'}
                {synopsis && synopsis.length > 150 && '...'}
              </p>
            </section>
          </footer>
        </article>
        <button
          onClick={() => {
            post(anime);
          }}>
          Add To Favorite
        </button>
      </section>
    </>
  );
};

export default Card;
