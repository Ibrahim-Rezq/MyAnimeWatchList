import { useEffect, useState } from 'react'

import styles from '../css/Nav.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/actions/actionCreator'
import * as actions from '../../redux/actions/actionCreator'

import Modal from '../utils/App/Modal'
import { navLinks, protLinks } from '../utils/App/navData'
import { GoSignOut } from 'react-icons/go'
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
            <ul className={styles.navLinks}>
                {navLinks.map((link, i) => {
                    return (
                        <li key={i} className={link.nameClass}>
                            <Link href={link.path}>
                                <a style={{ background: 'none' }}>
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
                                                    <a
                                                        style={{
                                                            background: 'none',
                                                        }}
                                                    >
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
