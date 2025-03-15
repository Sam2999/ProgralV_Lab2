import { useEffect, useState } from 'react';
function useCounter(favoriteNumber) {
  const inicialCount = Number(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(inicialCount);
  


  useEffect(() =>{
    localStorage.setItem("count", count);
  },[count]);

  const DicreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const isFavorite = count === favoriteNumber;

  return { count, IncreaseCount, DicreaseCount, isFavorite };
}

export default useCounter;