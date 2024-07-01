export function FoodCard ({ foodTitle, foodDescription, foodPrice, foodImg }) {
  return (
    <>
      <section className='food'>
        <article className='foodCard'>
          <h3 className='foodTitle fw-semibold'>{foodTitle}</h3>
          <span className='foodDescription fs-6'>{foodDescription}</span>

          <span className='foodPrice'>{`$${foodPrice}`}</span>

        </article>

        <figure className='figure'>
          <img src={foodImg} className='figure-img img-fluid rounded' alt='' />
        </figure>
      </section>
    </>
  )
}
