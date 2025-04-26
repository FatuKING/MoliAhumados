import { useCart } from '../hooks/useCart.js'
import { Link } from 'react-router-dom'
import { Carrusel } from '../component/Carrusel.jsx'
import { Logo } from '../component/Logo.jsx'
import { Foods } from '../component/Foods.jsx'
import { useData } from '../hooks/useData.js'
import { useEffect } from 'react'

export function Home () {
  const { categories, setData, loading } = useData() 
  const { state } = useCart()

  const numberOfItems = state.reduce((total, product) => total + product.quantity, 0)

  useEffect(() => {
    setData(); 
  }, []);

  const urlLink = [{
    url: 'https://wa.me/5491124037996',
    icon: 'bi bi-whatsapp'
  },
  {
    url: 'tel:5491124037996',
    icon: 'bi bi-telephone'
  },
  {
    url: 'https://maps.app.goo.gl/RDNqUVYAN5ENfk8j6',
    icon: 'bi bi-geo-alt'
  }] 

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
          {
            urlLink.map((link, index) => (
              <a key={index} href={link.url} target='_blank' rel='noreferrer'> <i className={link.icon} style={{ color: 'black', fontSize: '24px' }}></i> </a>
            ))
          }
          <Link to='/cart' className='bi bi-cart4 btnCart'>{numberOfItems ? <div className='numberCart jello-horizontal'>{numberOfItems}</div> : null} </Link>
        </div>

        <div className='accordion' id='accordionFoods'>
          {loading ? ( 
            <div className='d-flex justify-content-center align-items-center pt-5'>
              <span class="spinner"></span>
            </div>
          ) : (
            categories.map((category, index) => (
              <Foods key={index} category={category} id={`collapse${index}`} />
            ))
          )}
        </div>
      </main>

    </>
  )
}
