import styles from '../css/Footer.module.css'
import React from 'react'
import Container from '@mui/material/Container'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <p>Made By Ibrahim_Amin</p>
                    <ul className={styles.social}>
                        <li>
                            <a href='https://www.linkedin.com/in/ibrahim-rezq'>
                                <LinkedInIcon color='primary' />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/Ibrahim-Rezq'>
                                <GitHubIcon color='primary' />
                            </a>
                        </li>
                    </ul>
                </Container>
            </footer>
        </>
    )
}

export default Footer
