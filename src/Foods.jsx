import { FoodCard } from './FoodCard'

export function Foods ({ name, children }) {
  return (
    <>
      <div class='accordion-item'>
        <h2 class='accordion-header text-center'>
          <button class='accordion-button bg-dark text-white' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
            <p className='text-center w-100 aling-item-center'>Sandwich Ahumados</p>
          </button>
        </h2>
        <div id='collapseOne' class='accordion-collapse collapse show' data-bs-parent='#accordionFoods'>
          <FoodCard foodTitle='Classic' foodDescription='Sandwich de bondiola Ahumeda, lechuga, tomate, cebolla morada, pepinillos agridulces' foodPrice='$6000' foodImg='/SANGUCHES-01.jpg' />
          <FoodCard foodTitle='Big Cheese + Porción de papas fritas' foodDescription='Sandwich de bondiola ahumada, cheddar, salsa thousand island' foodPrice='$7500' foodImg='/SANGUCHES-04.jpg' />
          <FoodCard foodTitle='Bacon BBQ' foodDescription='Sandwich de bondiola ahumada, panceta, cheddar, barbacoa casera' foodPrice='$8000' foodImg='/SANGUCHES-09.jpg' />
          <FoodCard foodTitle='Súper Coleslaw' foodDescription='Sandwich de bondiola ahumada, coleslaw, morrones dulces encurtidos' foodPrice='$7000' foodImg='/SANGUCHES-13.jpg' />
        </div>
      </div>

    </>
  )
}
