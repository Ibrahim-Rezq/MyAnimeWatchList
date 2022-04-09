import styles from '../css/Footer.module.css'
import React from 'react'
import { ImLinkedin, ImGithub } from 'react-icons/im'
const Footer = () => {
    return (
        <>
            <section className={styles.footer}>
                <section className='container'>
                    <p>Made By Ibrahim_Amin</p>
                    <ul className={styles.social}>
                        <li>
                            <a href='https://www.linkedin.com/in/ibrahim-rezq'>
                                <ImLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/Ibrahim-Rezq'>
                                <ImGithub />
                            </a>
                        </li>
                    </ul>
                </section>
            </section>
        </>
    )
}

export default Footer
