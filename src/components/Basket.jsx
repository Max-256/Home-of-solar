import React from 'react';
import {Link} from 'react-router-dom'

function Basket({basket, onRemove, onIncrease, onDecrease}) {
    if(basket.length === 0) 
    return <h4 className='container'>Basket is empty!</h4>

    let totalPrice =  0;

    for (const item of basket) 
    totalPrice += (item.price * item.quantity);
    
    return (
        <div className='container'>
            <h5>My Shopping Cart</h5>
            <table className="table">
              <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th></th>
                </tr>
              </thead>
              <tbody>               
                {basket.map( item => 
                  <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <div className='quantity'>
                      <button className='btn btn-secondary' 
                      onClick={() => onDecrease(item)} 
                      disabled={item.quantity === 1}>
                        -
                      </button>
                      <span className='number'>
                      {item.quantity}
                      </span>
                      <button className='btn btn-primary' 
                      onClick={() => onIncrease(item)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td>$ {item.price}</td>
                  <td><button className='btn btn-danger' onClick={() => onRemove(item)}>
                     X
                      </button>
                  </td>
                  </tr>
                )}
              </tbody>
            </table>
            <span className='total'>Total Price: </span>$ {totalPrice.toFixed(2)}
            <div className='PTP'>
              <Link className='proceed-to-pay' to="/payment">Proceed to pay</Link>
            </div>
        </div>
    );
}

export default Basket;


