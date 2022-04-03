import { useEffect, useState } from 'react'

import styles from '../css/Nav.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/actions/actionCreator'
import * as actions from '../../redux/actions/actionCreator'

import NavLink from './NavLink'
import Modal from '../utils/App/Modal'
import {
    GoSignIn,
    GoSignOut,
    GoHome,
    GoSearch,
    GoQuote,
    GoListOrdered,
} from 'react-icons/go'
import { MdOutlineAccountCircle } from 'react-icons/md'

const Nav = () => {
    const { modal, account } = useSelector((state) => state)
    const dispatch = useDispatch()
    const router = useRouter()

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }
    const [bttb, setBttb] = useState(false)
    const [navToggeled, setNavToggeled] = useState(false)
    const buttonToggel = () => {
        if (window.scrollY > 1000) setBttb(true)
        else setBttb(false)
    }
    const navToggel = () => {
        if (window.innerWidth <= 768) setNavToggeled(true)
        else setNavToggeled(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', buttonToggel)
        window.addEventListener('resize', navToggel)
        return () => {
            window.removeEventListener('scroll', buttonToggel)
            window.removeEventListener('resize', navToggel)
        }
    }, [])

    const protLinks = [
        {
            name: 'Register',
            path: '/account/register',
            protectedLink: true,
            icon: <GoSignIn />,
        },
        {
            name: 'Login',
            path: '/account/login',
            protectedLink: true,
            icon: <GoSignIn />,
        },
    ]
    const navLinks = [
        {
            name: 'Home',
            path: '/',
            icon: <GoHome />,
        },
        { name: 'Search', path: '/search', icon: <GoSearch /> },
        {
            name: 'AnimeQuotes',
            path: '/animeQuotes',
            icon: <GoQuote />,
        },

        { name: 'AnimeTop', path: '/animeTop', icon: <GoListOrdered /> },
    ]

    const handelLogout = async (e) => {
        try {
            e.preventDefault()
            dispatch(actions.signOut())
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <nav className={'container ' + styles.nav} style={{}}>
            <ul>
                <li>
                    <Link href='/'>
                        <a style={{ background: 'none' }}>
                            <strong>Anime Watch List</strong>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul className={navToggeled ? styles.navLinks : ''}>
                {navLinks.map((link, i) => {
                    return (
                        <li key={i} className={link.nameClass}>
                            <Link href={link.path}>
                                <a>
                                    {link.icon} {link.name}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <ul>
                <li>
                    <details role='list'>
                        <summary aria-haspopup='listbox'>
                            {account.isSignedIn ? (
                                <>
                                    <strong>
                                        <MdOutlineAccountCircle />{' '}
                                        {account.user}
                                    </strong>
                                </>
                            ) : (
                                <strong>Acccount</strong>
                            )}
                        </summary>
                        <ul role='listbox'>
                            {!account.isSignedIn ? (
                                <>
                                    {protLinks.map((link, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className={link.nameClass}
                                            >
                                                <Link
                                                    href={
                                                        link.protection
                                                            ? '/'
                                                            : link.path
                                                    }
                                                >
                                                    <a>
                                                        {link.icon} {link.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </>
                            ) : (
                                <li>
                                    <a
                                        onClick={handelLogout}
                                        className='outline'
                                    >
                                        <GoSignOut />
                                        LogOut
                                    </a>
                                </li>
                            )}
                        </ul>
                    </details>
                </li>
            </ul>

            {bttb && (
                <button className={styles.toTop} onClick={scrollToTop}>
                    {' '}
                    &#x2B06;
                </button>
            )}
            {modal.isModalOpen && (
                <Modal
                    closeModal={() => {
                        dispatch(closeModal())
                    }}
                    modalContent={modal.modalContent}
                    className={styles.modal}
                />
            )}
        </nav>
    )
}

export default Nav
