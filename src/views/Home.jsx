import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { getGhibli } from '../services/fetch';

export default function Home() {
  const [ghiblis, setGhiblis] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGhibli();
      setGhiblis(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    <h2>loading</h2>;
  }

  return (
    <div>
      <Cards ghiblis={ghiblis}></Cards>
    </div>
  );
}
