import Image from 'next/image'
import styles from '../css/Card.module.css'

const Card = ({ anime }) => {
    const { images, title, synopsis, url } = anime
    return (
        <>
            <article>
                <section className={styles.card}>
                    <section className={styles.cardHead}>
                        <a href={url} target='_blank'>
                            <Image
                                src={images.jpg.image_url}
                                width='128'
                                height='179'
                                alt='hi'
                            />
                        </a>
                    </section>
                    <section className={styles.cardBody}>
                        <h4>{title}</h4>
                        <p>
                            {(synopsis && synopsis.slice(0, 150)) ||
                                'No discription found'}
                            ...
                        </p>
                    </section>
                </section>
            </article>
        </>
    )
}

export default Card
