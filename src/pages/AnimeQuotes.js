import React from 'react';
import Nav from '../components/Nav';
import Link from 'next/link';
import Footer from '../components/Footer';

const AnimeQuotes = ({ quoteData }) => {
  const { anime, character, quote } = quoteData;
  return (
    <>
      <Nav />
      <article className='container'>
        <h1>"{quote}"</h1>
        <p>
          By: {character}, From: {anime}
        </p>
        <Link href='/AnimeQuotes'>
          <a role='button'>AnotherQuotes</a>
        </Link>
      </article>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch('https://animechan.vercel.app/api/random');
    const quoteData = await res.json();
    return {
      props: { quoteData },
    };
  } catch (e) {
    console.error(e);
  }
}
export default AnimeQuotes;
