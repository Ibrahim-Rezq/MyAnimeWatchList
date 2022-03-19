import { useState } from 'react';
import Nav from '../components/Nav';
import Image from 'next/image';
import Head from 'next/head';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

const HomePage = () => {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <Head>
        <title>My Anime WatchList</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div style={{ textAlign: 'center' }}>
        <Nav />
        <Header title='Develop. Preview. Ship. 🚀' />
        <main className='container'>
          <ul>
            {names.map((name) => (
              <li style={{ listStyle: 'none' }} key={name}>
                {name}
              </li>
            ))}
          </ul>
          <div>
            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        </main>
      </div>
    </>
  );
};
export default HomePage;
