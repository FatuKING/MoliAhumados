import { QuantitySelector } from "./QuantitySelector"

export function ItemCart ({ products }) {
    return (
        <>
            <article key={products.id} className='d-flex justify-content-between align-items-center border' style={{ height: '100px' }}>
                <img src={products.image} alt={products.image} className='cartImg' />

                <div className='d-flex justify-content-center' style={{ width: '120px' }}>
                    <h3 className='fs-6 text-center fw-semibold'>{products.name}</h3>
                </div>

                <QuantitySelector product={products} />

                <span style={{ width: '100px' }}>${products.priceEnd}</span>

            </article>
        </>
    )
}