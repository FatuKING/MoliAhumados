export function Logo ({ img }) {
  return (
    <>
      <figure className='figure'>
        <img src={img} className='figure-img h-100 w-100 rounded' alt={img} />
      </figure>
    </>
  )
}
