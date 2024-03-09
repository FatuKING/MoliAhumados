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
          <div class='food'>
            <div className='foodCard'>
              <h3 className='foodTitle'>Classic</h3>
              <span className='foodDescription'>Sandwich de bondiola Ahumeda, lechuga, tomate, cebolla morada, pepinillos agridulces</span>

              <span className='foodPrice'>$6000</span>

              <button className='btn btn-dark sum rounded'><i class='bi bi-plus-lg' /></button>
            </div>

            <figure className='figure'>
              <img src='/SANGUCHES-01.jpg' className='figure-img h-100 w-100 rounded' alt='' />
            </figure>
          </div>
          <div class='food'>
            <div className='foodCard'>
              <h3 className='foodTitle'>Classic</h3>
              <span className='foodDescription'>Sandwich de bondiola Ahumeda, lechuga, tomate, cebolla morada, pepinillos agridulces</span>

              <span className='foodPrice'>$6000</span>

              <button className='btn btn-dark sum rounded'><i class='bi bi-plus-lg' /></button>
            </div>

            <figure className='figure'>
              <img src='/SANGUCHES-01.jpg' className='figure-img h-100 w-100 rounded' alt='' />
            </figure>
          </div>
        </div>
      </div>

    </>
  )
}
