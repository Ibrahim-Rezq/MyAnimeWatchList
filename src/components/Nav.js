import { useEffect, useState } from 'react'

import styles from '../css/Nav.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/actions/actionCreator'
import * as actions from '../../redux/actions/actionCreator'

import NavLink from './NavLink'
import Modal from '../utils/Modal'

const Nav = ({ PageName }) => {
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
    const buttonToggel = () => {
        if (window.scrollY > 1000) setBttb(true)
        else setBttb(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', buttonToggel)
        return () => {
            window.removeEventListener('scroll', buttonToggel)
        }
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Search', path: '/search' },
        { name: 'AnimeQuotes', path: '/animeQuotes' },
        { name: 'Register', path: '/account/register', protectedLink: true },
        { name: 'Login', path: '/account/login', protectedLink: true },
        { name: 'AnimeTop', path: '/animeTop' },
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
                            <strong>{PageName}</strong>
                        </a>
                    </Link>
                </li>
                <li>
                    <strong>{account.user}</strong>
                </li>
                {account.isSignedIn && (
                    <li>
                        <button onClick={handelLogout} className='outline'>
                            LogOut
                        </button>
                    </li>
                )}
            </ul>
            <ul className={styles.navLinks}>
                {navLinks.map((link, i) => {
                    return (
                        <NavLink
                            key={i}
                            {...link}
                            protection={account.isSignedIn}
                            nameClass={
                                router.pathname === link.path
                                    ? styles.active
                                    : ''
                            }
                        />
                    )
                })}
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
