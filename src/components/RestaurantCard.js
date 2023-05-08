const RestaurantCard = (props) => {
  const { restData } = props

  const { name, resImg, cuisine, avgRating, avgCost, avgDeliveryTime } =
    restData

  return (
    <div className='res-card'>
      <img className='res-img' src={resImg} alt='res-img' />
      <div className='res-description'>
        <p>{name}</p>
        <p>{cuisine}</p>
        <p>{avgRating} stars</p>
        <p>{avgCost} for Two</p>
        <p>{avgDeliveryTime} min</p>
      </div>
    </div>
  )
}

export default RestaurantCard
