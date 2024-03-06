import { Carrusel } from './Carrusel'

function App () {
  return (
    <>
      <main>
        <Carrusel />
        <header className='container d-flex'>
          <figure className='figure'>
            <img src='/moliLogo.png' className='figure-img h-100 w-100 rounded' alt='logo.png' />
          </figure>

          <div>
            <h1 className='fs-3 lh-1'>Moli Ahumado</h1>
            <span className='lh-1'>Carnes Ahumadas</span>
          </div>
        </header>
        <hr className='container w-75' />
        <div className='container d-flex justify-content-around'>
          <a href=''><i class='bi bi-whatsapp' /></a>
          <a href=''><i class='bi bi-telephone' /></a>
          <a href=''><i class='bi bi-share' /></a>
        </div>
      </main>
    </>
  )
}

export default App
