import { QuantitySelector } from "./QuantitySelector"

export function ItemCart ({ products }) {
    return (
        <>
            <article key={products.id} className='d-flex justify-content-between align-items-center border itemCart' style={{ height: '100px' }}>
                <img src={products.image} alt={`Producto ${products.id}`} className='cartImg' />

                <span className='text fw-semibold' style={{ width: '120px' }}>{products.name}</span>

                <QuantitySelector product={products} />

                <span className="text" style={{ width: '100px' }}>${products.priceEnd}</span>

            </article>
        </>
    )
}