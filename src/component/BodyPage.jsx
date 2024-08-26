import { useCart } from '../hooks/useCart.js'
import { Carrusel } from './Carrusel.jsx'
import { Logo } from './Logo.jsx'
import { Link } from './Link.jsx'
import { Foods } from './Foods.jsx'

export function BodyPage () {
  const { state, handleView } = useCart()

  const numberOfItems = state.length

  return (
    <>
      <main className='shadow-lg'>
        <Carrusel />
        <header className='container d-flex gap-5 mt-3'>
          <Logo img='/moliLogo.png' />
          <div>
            <h1 className='title'>Moli Ahumados</h1>
            <span className='lh-1 fw-semibold text-body-secondary fst-italic'>Carnes Ahumadas</span>
          </div>
        </header>

        <hr className='container' />

        <div className='container d-flex justify-content-around mb-3'>
          <Link url='https://wa.me/5491124037996' icon='whatsapp' color='black' size='24px' />
          <Link url='tel:5491124037996' icon='telephone' color='black' size='24px' />
          <Link url='https://maps.app.goo.gl/RDNqUVYAN5ENfk8j6' icon='geo-alt' color='black' size='24px' />
          <button className='bi bi-cart4 btnCart' onClick={handleView}>{numberOfItems ? <div className='numberCart jello-horizontal'>{numberOfItems}</div> : null} </button>
        </div>

        <div className='accordion' id='accordionFoods'>
          <Foods name='Promociónes' id='collapseOne' url={import.meta.env.VITE_API_PROMOTIONS} />
          <Foods name='Sandwich Ahumados' id='collapseTwo' url={import.meta.env.VITE_API_SANDWICHS} />
          <Foods name='Empanadas' id='collapseThree' url={import.meta.env.VITE_API_EMPANADAS} />
        </div>
      </main>

    </>
  )
}
