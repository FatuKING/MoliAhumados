import { Carrusel } from './component/Carrusel.jsx'
import { Link } from './component/Link.jsx'
import { Logo } from './component/Logo.jsx'
import { Foods } from './component/Foods.jsx'
import { useCart } from './hooks/useCart.js'
import { Cart } from './component/Cart.jsx'

function App () {
  const { viewCart, handleView } = useCart()

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
          <Link url='https://wa.me/1124037996' icon='whatsapp' color='black' size='24px' />
          <Link url='tel:+1124037996' icon='telephone' color='black' size='24px' />
          <Link url='https://maps.app.goo.gl/RDNqUVYAN5ENfk8j6' icon='geo-alt' color='black' size='24px' />
          <i className='bi bi-cart4' style={{ color: 'black', fontSize: '24px', cursor: 'pointer' }} onClick={handleView} />
        </div>

        <div className='accordion' id='accordionFoods'>
          <Foods name='Promociónes' id='collapseOne' url='https://docs.google.com/spreadsheets/d/e/2PACX-1vT7A4gLFc_0px04ZzEpRpYnyuqfL_SDfslOWCBJGnlawBaTfqob5e0XFN2a5u3P5s_ewpjdLbJeOkRB/pub?output=tsv&gid=492732216' />
          <Foods name='Sandwich Ahumados' id='collapseTwo' url='https://docs.google.com/spreadsheets/d/e/2PACX-1vT7A4gLFc_0px04ZzEpRpYnyuqfL_SDfslOWCBJGnlawBaTfqob5e0XFN2a5u3P5s_ewpjdLbJeOkRB/pub?gid=0&single=true&output=tsv' />
          <Foods name='Empanadas' id='collapseThree' url='https://docs.google.com/spreadsheets/d/e/2PACX-1vT7A4gLFc_0px04ZzEpRpYnyuqfL_SDfslOWCBJGnlawBaTfqob5e0XFN2a5u3P5s_ewpjdLbJeOkRB/pub?output=tsv&gid=2069364023' />
          <Foods name='Pizzas' id='collapseFour' url='https://docs.google.com/spreadsheets/d/e/2PACX-1vT7A4gLFc_0px04ZzEpRpYnyuqfL_SDfslOWCBJGnlawBaTfqob5e0XFN2a5u3P5s_ewpjdLbJeOkRB/pub?output=tsv&gid=1517100391' />
        </div>
      </main>

      {
        viewCart ? <Cart /> : null
      }
    </>
  )
}

export default App
