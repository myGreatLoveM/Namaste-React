import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'

const Body = () => {
  const [listOfAllRestaurant, setListOfRestaurant] = useState(resList)

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            setListOfRestaurant((prevState) =>
              prevState.filter((restaurant) => restaurant.avgRating >= 4.0)
            )
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {listOfAllRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restData={restaurant} />
        })}
      </div>
    </div>
  )
}

export default Body
