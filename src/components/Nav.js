import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { useRouter } from 'next/router'
import styles from '../css/Nav.module.css'

const Nav = ({ PageName }) => {
    const router = useRouter()
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }
    const [width, setWidth] = useState(0)
    const widthChange = () => {
        setWidth(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener('scroll', widthChange)
        return () => {
            window.removeEventListener('scroll', widthChange)
        }
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Search', path: '/search' },
        { name: 'AnimeQuotes', path: '/animeQuotes' },
        { name: 'Login', path: '/account/login' },
        { name: 'AnimeTop', path: '/animeTop' },
    ]

    return (
        <nav className='container' style={{ justifyContent: 'center' }}>
            <ul>
                <li>
                    <Link href='/'>
                        <a style={{ background: 'none' }}>
                            <strong>{PageName}</strong>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.navLinks}>
                {navLinks.map((link, i) => {
                    return (
                        <NavLink
                            key={i}
                            {...link}
                            nameClass={
                                router.pathname === link.path
                                    ? styles.active
                                    : ''
                            }
                        />
                    )
                })}
            </ul>
            {width > 1000 && (
                <button className={styles.toTop} onClick={scrollToTop}>
                    {' '}
                    &#x2B06;
                </button>
            )}
        </nav>
    )
}

export default Nav
