export function FoodCard ({ foodTitle, foodDescription, foodPrice, foodImg }) {
  return (
    <>
      <div className='food'>
        <div className='foodCard'>
          <h3 className='foodTitle'>{foodTitle}</h3>
          <span className='foodDescription'>{foodDescription}</span>

          <span className='foodPrice'>{`$${foodPrice}`}</span>

          <button className='btn btn-dark sum rounded'><i className='bi bi-plus-lg' /></button>
        </div>

        <figure className='figure'>
          <img src={foodImg} className='foodImg' alt='' />
        </figure>
      </div>
    </>
  )
}
