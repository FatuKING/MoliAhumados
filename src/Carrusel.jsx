export function Carrusel () {
  return (
    <>
      <div className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>

          <div className='carousel-item active'>
            <img src='/SANGUCHES-1.jpg' className='d-block w-100' alt='SANGUCHES-1.jpg' />
          </div>

          <div className='carousel-item'>
            <img src='/SANGUCHES-2.jpg' className='d-block w-100' alt='SANGUCHES-2.jpg' />
          </div>

          <div className='carousel-item'>
            <img src='/SANGUCHES-3.jpg' className='d-block w-100' alt='SANGUCHES-3.jpg' />
          </div>

        </div>
      </div>
    </>
  )
}
