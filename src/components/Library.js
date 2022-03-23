import AnimeShelf from './AnimeShelf';
import { useState, useEffect } from 'react';
import { getAll } from '../utils/DataStoreAPI';

const Library = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getAll();
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {data.length > 0 && data ? (
        <AnimeShelf data={data} />
      ) : (
        <h2>No Data Found</h2>
      )}
    </>
  );
};

export default Library;
