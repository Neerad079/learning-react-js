import React, { useState } from 'react';

// onChange = event handler primarily used with form element
//            eg : <input> , <textarea> , <select> , <radio>
//            Triggers a function when the input value is changed in real time


function MyComponent() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState('Home Delivery');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  }
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  }
  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type='number'></input>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='enter delivery instruction'></textarea>
      <p>Delivery Instruction: {comment}</p>

      <select value={payment} onChange={handlePaymentChange} >
        <option value={""}>Select a payment option</option>
        <option value={"Visa"}>Visa</option>
        <option value={"MasterCard"}>MasterCard</option>
        <option value={"UPI"}>UPI</option>
      </select>
      <p>Payment Type Selected: {payment}</p>

      <label >
        <input type='radio'  value={"Pick Up"} checked={shipping==='Pick Up'} onChange={handleShippingChange} ></input>
        Pick up</label> <br></br>
      <label >
        <input type='radio' value={'Home Delivery'} checked={shipping==='Home Delivery'} onChange={handleShippingChange}></input>
        Home Delivery</label>
      <p> Shipping: { shipping}</p>

    </div>
  )
}
export default MyComponent;