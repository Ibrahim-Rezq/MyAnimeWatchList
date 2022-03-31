import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { useRouter } from 'next/router';
import styles from '../css/Nav.module.css';
import Modal from '../utils/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions/actionCreator';

const Nav = ({ PageName }) => {
  const { modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(modal);

  const router = useRouter();
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [width, setWidth] = useState(0);
  const widthChange = () => {
    setWidth(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', widthChange);
    return () => {
      window.removeEventListener('scroll', widthChange);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'AnimeQuotes', path: '/animeQuotes' },
    { name: 'Register', path: '/account/register' },
    { name: 'Login', path: '/account/login' },
    { name: 'AnimeTop', path: '/animeTop' },
  ];

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
      </ul>
      <ul className={styles.navLinks}>
        {navLinks.map((link, i) => {
          return (
            <NavLink
              key={i}
              {...link}
              nameClass={router.pathname === link.path ? styles.active : ''}
            />
          );
        })}
      </ul>
      {width > 1000 && (
        <button className={styles.toTop} onClick={scrollToTop}>
          {' '}
          &#x2B06;
        </button>
      )}
      {modal.isModalOpen && (
        <Modal
          closeModal={() => {
            dispatch(closeModal());
          }}
          modalContent={modal.modalContent}
          className={styles.modal}
        />
      )}
    </nav>
  );
};

export default Nav;
