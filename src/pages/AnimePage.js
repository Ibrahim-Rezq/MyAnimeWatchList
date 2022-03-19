import React from 'react';
import Nav from '../components/Nav';

const AnimePage = ({ quoteData }) => {
  const { anime, character, quote } = quoteData;
  return (
    <>
      <Nav />
      <div className='container'>
        <h1>"{quote}"</h1>
        <p>
          By: {character}, From: {anime}
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
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
export default AnimePage;
