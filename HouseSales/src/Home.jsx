import React, { useState, useEffect } from 'react';
import config from './config';

export default function Home() {
  const [arts, setArts] = useState('');

  const fetchArts = async () => {
    try {
      const res = await fetch(`${config.url}/art/`);
      const data = await res.text(); 
      setArts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArts();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
