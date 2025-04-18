import { useCart } from "../hooks/useCart"

export function QuantitySelector ({product}) {
    const { addToCart, deleteItem, state } = useCart()

    const productIndex = state.findIndex(item => item.id === product.id)
    const productInCart = state[productIndex]
    const quantity = productInCart ? productInCart.quantity : 0

    return (
        <>
        <div className='d-flex gap-1 align-items-center border rounded'>
            <button className='btn btnAddCart rounded' onClick={() => deleteItem(product.id)}><i className={quantity === 1 ? 'bi bi-trash' : 'bi bi-dash-lg'} /></button>
            <span className='fw-semibold'>{quantity}</span>
            <button className='btn btnAddCart rounded' onClick={() => addToCart(product)}><i className='bi bi-plus-lg' /></button>
        </div>
        </>
    ) 
}