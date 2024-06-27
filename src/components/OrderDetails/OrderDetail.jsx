import React, { useState, useEffect } from 'react';
import { auth } from '../Authentication/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import './OrderDetail.css';

const OrderDetail = ({ closeModal, totalAmount }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ name: '', location: '', phone: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.name || !userData.location || !userData.phone) {
      toast.error('All fields are required.', {
        position: 'bottom-center',
      });
      return;
    }
    const orderDetails = {
      user: userData,
      items: cartItems,
      totalAmount: totalAmount
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    console.log('Order Details Submitted:', orderDetails);
    toast.success('Order details saved successfully!', {
      position: 'top-center',
    });
    closeModal();
  };

  return (
    <div className="order-details-container">
      <button className="close-button" onClick={closeModal}>
            &times;
      </button>
      <h1>Order Details</h1>
      {user ? (
        <form onSubmit={handleSubmit} className="order-details-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label><br/>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location *</label><br/>
            <input
              type="text"
              id="location"
              name="location"
              value={userData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label><br/>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit Order</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderDetail;
