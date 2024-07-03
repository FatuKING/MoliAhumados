export function Link ({ url, icon, color, size }) {
  const nameIco = `bi bi-${icon}`

  return (
    <>
      <a href={url} target='_blank' rel='noreferrer'><i className={nameIco} style={{ color: `${color}`, fontSize: `${size}` }} /></a>
    </>
  )
}
