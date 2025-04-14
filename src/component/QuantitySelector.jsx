import { useCart } from "../hooks/useCart"

export function QuantitySelector ({product}) {
    const { addToCart } = useCart()

    return (
        <>
        <div className='d-flex gap-1 align-items-center border rounded'>
            <button className='btn btnAddCart rounded' onClick={() => addToCart(product)}><i className='bi bi-dash-lg' /></button>
            <span className='fw-semibold'>0</span>
            <button className='btn btnAddCart rounded' onClick={() => addToCart(product)}><i className='bi bi-plus-lg' /></button>
        </div>
        </>
    )
}