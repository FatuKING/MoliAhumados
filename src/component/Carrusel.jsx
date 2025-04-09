import { useState, useEffect } from 'react';
import { clock } from '../logic/clock.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'bootstrap'; // Importa Carousel explícitamente

export function Carrusel() {
  const [open, setOpen] = useState(() => clock());

  const images = [
    '/Sandwich00.jpg',
    '/Sandwich01.jpg',
    '/Sandwich02.jpg',
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
          <div className="carousel-item active">
            <img
              src="/Sandwich05.webp"
              className="d-block w-100 object-fit-cover"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Sandwich 00"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Sandwich00.webp"
              className="d-block w-100 object-fit-cover"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Sandwich 01"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Sandwich07.webp"
              className="d-block w-100 object-fit-cover"
              style={{ height: '500px', objectFit: 'cover' }}
              alt="Sandwich 02"
            />
          </div>
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