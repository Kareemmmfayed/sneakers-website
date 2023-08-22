import React from 'react'
import phoo from '../images/image-product-2.jpg'

const Cart = ({final, setFinal, items, setItems}) => {
    const checkout = () => {
        setFinal(false)
    }

    return (
        <div className='carti'>
            <h4>Cart</h4>
            <div className='line2'></div>
            {final === false ? 
            <div className='container'>The cart is empty</div> : 
            <div className='item-cart'>
                <img src={phoo} alt='' className='myimg10'/>
                <div className='info'>
                    <div className='text'>
                        <p>Fall limited edition sneakers</p>
                        <span>$45 x {items}</span>
                        <span className='secondSpan'>${(90 * items) / 2}</span>
                    </div>
                    <button onClick={checkout}>Checkout</button>
                </div>
            </div>
            }
        </div>
    )
}

export default Cart