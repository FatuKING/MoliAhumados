import { FoodCard } from './FoodCard.jsx'
import { api } from '../logic/api.js'
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
      <div className='accordion-item'>
        <h2 className='accordion-header text-center'>
          <button className='accordion-button bg-light-subtle fs-5 text-black fw-bold' type='button' data-bs-toggle='collapse' data-bs-target={`#${id}`} aria-expanded='false' aria-controls={id}>
            {name}
          </button>
        </h2>
        <div id={id} className='accordion-collapse collapse contenedorImg' data-bs-parent='#accordionFoods'>
          <FoodCard products={data} id='collapseOne' />
        </div>
      </div>

    </>
  )
}
