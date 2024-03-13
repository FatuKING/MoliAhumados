import { Carrusel } from './Carrusel'
import { Link } from './Link'
import { Logo } from './Logo'
import { Foods } from './Foods'

function App () {
  return (
    <>
      <main>
        <Carrusel />
        <header className='container d-flex mt-3'>
          <Logo img='/moliLogo.png' />
          <div>
            <h1 className='title'>Moli Ahumado</h1>
            <span className='lh-1'>Carnes Ahumadas</span>
          </div>
        </header>
        <hr className='container w-75' />
        <div className='container d-flex justify-content-around mb-3'>
          <Link url='https://wa.me/1123222824' icon='whatsapp' color='black' size='24px' />
          <Link url='tel:+123456789' icon='telephone' color='black' size='24px' />
          <Link url='https://www.instagram.com/moliahumados/?utm_source=qr&r=nametag' icon='instagram' color='black' size='24px' />
        </div>

        <div className='accordion' id='accordionFoods'>
          <Foods name='Sandwich Ahumados' id='collapseOne' url='https://docs.google.com/spreadsheets/d/e/2PACX-1vT7A4gLFc_0px04ZzEpRpYnyuqfL_SDfslOWCBJGnlawBaTfqob5e0XFN2a5u3P5s_ewpjdLbJeOkRB/pub?gid=0&single=true&output=tsv' />
          <Foods name='Bebidas' id='collapseTwo' url='https://docs.google.com/spreadsheets/d/e/2PACX-1vT7A4gLFc_0px04ZzEpRpYnyuqfL_SDfslOWCBJGnlawBaTfqob5e0XFN2a5u3P5s_ewpjdLbJeOkRB/pub?output=tsv&gid=599689181' />
          <Foods name='Postres' id='collapseThree' url='https://docs.google.com/spreadsheets/d/e/2PACX-1vT7A4gLFc_0px04ZzEpRpYnyuqfL_SDfslOWCBJGnlawBaTfqob5e0XFN2a5u3P5s_ewpjdLbJeOkRB/pub?output=tsv&gid=1681828816' />
        </div>
      </main>
    </>
  )
}

export default App
