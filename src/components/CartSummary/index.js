import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let cartValue = 0
      cartList.forEach(eachItem => {
        cartValue += eachItem.quantity * eachItem.price
      })

      return (
        <div className="summary-container">
          <h3 className="order-heading">
            Order Total :{' '}
            <span className="value-text">Rs : {cartValue}/- </span>
          </h3>
          <p>{cartList.length} items in cart</p>
          <button type="button">checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
