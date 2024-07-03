export function ImgExpand ({ img, showImg }) {
  return (
    <>
      <figure className='imgBackground shadow-lg rounded' onClick={showImg}>
        <img className='img rounded' src={img} alt={img} />
      </figure>
    </>
  )
}
