import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='container'>
      <ul>
        <li>
          <strong>Brand</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/'>
            <a className='secondary'>Home</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/AnimePage'>
            <a className='secondary'>AnimePage</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
