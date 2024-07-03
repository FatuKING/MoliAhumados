export function ImgExpand ({ img, showImg }) {
  return (
    <>
      <figure className='imgBackground rounded' onClick={showImg}>
        <img className='img rounded' src={img} alt={img} />
      </figure>
    </>
  )
}
