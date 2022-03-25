import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../css/Nav.module.css';

const Nav = () => {
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

  return (
    <nav className='container' style={{ justifyContent: 'center' }}>
      <ul>
        <li>
          <Link href='/'>
            <a style={{ background: 'none' }}>
              <strong>AnimeWatchList</strong>
            </a>
          </Link>
        </li>
      </ul>
      <ul className={styles.navLinks}>
        <li>
          <Link href='/'>
            <a className='secondary'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/Search'>
            <a className='secondary'>Search</a>
          </Link>
        </li>
        <li>
          <Link href='/AnimeQuotes'>
            <a className='secondary'>AnimeQuotes</a>
          </Link>
        </li>
        <li>
          <Link href='/AnimeTop'>
            <a className='secondary'>AnimeTop</a>
          </Link>
        </li>
      </ul>
      {width > 1000 && (
        <button className={styles.toTop} onClick={scrollToTop}>
          {' '}
          &#x2B06;
        </button>
      )}
    </nav>
  );
};

export default Nav;
