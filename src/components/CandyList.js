// src/components/CandyList.js

import React, { useEffect, useState } from 'react';
import { getCandies } from '../services/api'; // Import the API function

const CandyList = () => {
  const [candies, setCandies] = useState([]);

  useEffect(() => {
    // Fetch candies when the component is mounted
    const fetchCandies = async () => {
      try {
        const data = await getCandies();
        setCandies(data);
      } catch (error) {
        console.error('Failed to fetch candies:', error);
      }
    };

    fetchCandies();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h2>Our Candies</h2>
      <ul>
        {candies.map((candy) => (
          <li key={candy._id}>
            <h3>{candy.name}</h3>
            <p>{candy.description}</p>
            <p>${candy.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandyList;
