export function FoodCard ({ foodTitle, foodDescription, foodPrice, foodImg }) {
  return (
    <>
      <section className='food'>
        <article className='foodContainer'>
          <div className='foodCard'>
            <h3 className='fs-5 fw-bold'>{foodTitle}</h3>
            <span className='foodDescription text-body-secondary fw-semibold'>{foodDescription}</span>

            <span className='fw-bold'>{`$${foodPrice}`}</span>

          </div>

          <figure className='figureImg'>
            <img src={foodImg} className='img rounded' alt='' />
          </figure>
        </article>
      </section>
    </>
  )
}
