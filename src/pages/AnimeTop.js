import React from 'react';
import AnimeShelf from '../components/AnimeShelf';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AnimeTop = ({ data }) => {
  return (
    <>
      <div>
        <Nav />
        <AnimeShelf data={data.data} />
      </div>
      <Footer />
    </>
  );
};
export async function getStaticProps() {
  try {
    const res = await fetch('https://api.jikan.moe/v4/top/anime');
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (e) {
    console.error(e);
  }
}

export default AnimeTop;
