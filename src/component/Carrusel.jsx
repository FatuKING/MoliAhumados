import { useState, useEffect } from 'react';
import { clock } from '../logic/clock.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'bootstrap'; 

export function Carrusel() {
  const [open, setOpen] = useState(() => clock());

  const images = [
    'https://kky9ks5rg3.ufs.sh/f/d3KJoNhJrxASMqyKy5U9JL54QHd1c6PylU2i0WREeCOkYxwX',
    'https://kky9ks5rg3.ufs.sh/f/d3KJoNhJrxASfHjQHQ8nuqabjFJpCIkozAesd53BlwL92TZS',
    'https://kky9ks5rg3.ufs.sh/f/d3KJoNhJrxAS7DpEq91rlznQJkLC30cHKjNYa7ieSuZbvoqF',
  ];

  useEffect(() => {
    const openRestaurant = () => {
      const status = clock();
      setOpen(status);
    };

    const interval = setInterval(openRestaurant, 4500);

    return () => clearInterval(interval);
  }, []);

  // Inicialización manual del carrusel
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExample');
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 9000, 
        ride: 'carousel',
      });
    }
  }, []);

  return (
    <>
      <div id="carouselExample" className="carousel slide position-relative" data-bs-ride="carousel">
        <div className="carousel-inner">
          {
            images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img
                  src={image}
                  className="d-block w-100 object-fit-cover"
                  style={{ height: '500px', objectFit: 'cover' }}
                  alt={`Sandwich ${index}`}
                />
              </div>
            ))
          }	
        </div>

        <div className="position-absolute position-x">
          <span
            className={`rounded-5 p-1 ps-2 pe-2 fw-bold text-black ${
              open ? 'bg-success' : 'bg-danger'
            }`}
          >
            <i className="bi bi-alarm fw-bold" /> {open ? 'Abierto' : 'Cerrado'}
          </span>
        </div>
      </div>
    </>
  );
}