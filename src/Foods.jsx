import { FoodCard } from './FoodCard'
import { api } from './api'
import { useState, useEffect } from 'react'

export function Foods ({ name, url, id }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api(url)
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div class='accordion-item'>
        <h2 class='accordion-header text-center'>
          <button class='foodButton bg-dark text-white' type='button' data-bs-toggle='collapse' data-bs-target={`#${id}`} aria-expanded='false' aria-controls={id}>
            {name}
          </button>
        </h2>
        <div id={id} class='accordion-collapse collapse show' data-bs-parent='#accordionFoods'>
          {
           data.map((food, index) => {
             return (
               <FoodCard key={index} foodTitle={food.product} foodDescription={food.description} foodPrice={food.price} foodImg={food.img} id='collapseOne' />
             )
           })
          }
        </div>
      </div>

    </>
  )
}
