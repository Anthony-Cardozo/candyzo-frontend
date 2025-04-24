import { useState, useEffect } from 'react';
import { getCandies } from '../services/api';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBest = async () => {
      try {
        const response = await getCandies();///candies/best-sellers
        setProducts(response);
        console.log(response);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBest();
  }, []);

  return { products, loading, error };
}

export default useProducts;
