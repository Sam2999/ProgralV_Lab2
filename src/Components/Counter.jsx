import useCounter from '../hooks/useCounter'

function CardComponent() {     
  const favoriteNumber = 29; 
  const { count, IncreaseCount, DicreaseCount, isFavorite } = useCounter(favoriteNumber);

  return (
    <div className="card"> 
    {/* <h2>{numerofavorito}</h2> */}
    <h2>{count}</h2>

      {isFavorite && <h2>🎉 ¡Este es el número favorito de Samuel! 🎉</h2>}
   


    <button className='btn increment' onClick={IncreaseCount}>
      ➕
    </button>
    <button className='btn decrement' onClick={DicreaseCount}>
      ➖
    </button>

    
   </div>

  )
}

export default CardComponent