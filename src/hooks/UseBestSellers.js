import { useState, useEffect } from 'react';
import { getCandies } from '../services/api';

function UseBestSellers() {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBest = async () => {
      try {
        const response = await getCandies();///candies/best-sellers
        setBestSellers(response);
        console.log(response);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBest();
  }, []);

  return { bestSellers, loading, error };
}

export default UseBestSellers;
