import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    // TASK 3.1
    let totalAmount = 0;
    cart.forEach((item) => {
        let itemCost = parseFloat(item.cost.substring(1));
        totalAmount += itemCost * item.quantity;
    });
    return totalAmount;
  };

  const handleContinueShopping = (e) => {
    // TASK 3.2
    onContinueShopping(e);
  };



  const handleIncrement = (item) => {
    // TASK 3.4.1
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    // TASK 3.4.2
    if (item.quantity > 1) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else{
        dispatch(removeItem(item));
    }
  };

    
  const handleRemove = (item) => {
    // TASK 3.5
    dispatch(removeItem(item.name));
  };
  

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    // TASK 3.6
    let totalCost = 0;
    let unitCost = parseFloat(item.cost.substring(1));
    totalCost += unitCost * item.quantity;  
    return totalCost;  
  };

    // TASK 3.3
    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


