import { useState, useEffect, useCallback } from 'react';
import AnimeShelf from './AnimeShelf';

const SearchBar = () => {
  const [vals, setVals] = useState('');
  const [animeData, setAnimeData] = useState([]);

  const handelSearch = (e) => {
    const val = e.target.value;
    debouncedHandler(val);
    if (!vals || vals === null) {
      setAnimeData([]);
    }
  };

  const getData = async (value) => {
    try {
      if (value) {
        const res = await fetch(
          `https://api.jikan.moe/v4/anime?q=${value}&sfw`
        );
        const data = await res.json();
        setAnimeData(
          data.data
            .slice(0, 10)
            .sort((a, b) => {
              return a.rank - b.rank;
            })
            .map((el) => {
              if (el.rank !== 0) return el;
            })
        );
        setVals(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const debounce = (func, delay = 300) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const debouncedHandler = useCallback(debounce(getData, 350), []);

  return (
    <>
      <section className='container'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type='search' onKeyUp={handelSearch} />
        </form>
        <div>
          <h1>
            {animeData.length > 0 && vals ? (
              <>
                <span style={{ fontWeight: '100' }}>searching For: </span>
                {vals.slice(0, 1).toUpperCase().concat(vals.slice(1))}
              </>
            ) : (
              vals && (
                <>
                  <p>No Thing Found with {vals} in it</p>
                </>
              )
            )}
          </h1>
          <AnimeShelf data={animeData} />
        </div>
      </section>
    </>
  );
};

export default SearchBar;
