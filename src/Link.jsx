export function Link ({ url, icon, color, size }) {
  const nameIco = `bi bi-${icon}`

  return (
    <>
      <a href={url}><i class={nameIco} target='_blank' style={{ color: `${color}`, fontSize: `${size}` }} /></a>
    </>
  )
}
