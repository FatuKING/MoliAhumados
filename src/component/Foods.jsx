import { FoodCard } from './FoodCard.jsx'
import { useData } from '../hooks/useData.js'

export function Foods ({ name, id }) {
  const { data } = useData()

  console.log(data[name])

  return (
    <>
      <div className='accordion-item'>
        <h2 className='accordion-header text-center'>
          <button className='accordion-button bg-light-subtle fs-5 text-black fw-bold' type='button' data-bs-toggle='collapse' data-bs-target={`#${id}`} aria-expanded='false' aria-controls={id}>
            {name}
          </button>
        </h2>
        <div id={id} className='accordion-collapse collapse' data-bs-parent='#accordionFoods'>
          <FoodCard products={data[name]} id='collapseOne' />
        </div>
      </div>

    </>
  )
}
