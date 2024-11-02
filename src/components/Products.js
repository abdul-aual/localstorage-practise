import React, { useState, useEffect } from 'react';
import fakedata from './fakedata.json';
import CartChild from './CartChild';

const Products = () => {
    const [products] = useState(fakedata);
    const [cart, setCart] = useState({ TotalItems: 0, TotalAmount: 0, Items: [] });

    // Load cart from local storage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    // Function to add or update the item in the cart
    const handelAddtoBag = (product) => {
        const existingItemIndex = cart.Items.findIndex(item => item.id === product.id);
        let updatedItems = [...cart.Items];
        let updatedTotalAmount = cart.TotalAmount;
        let updatedTotalItems = cart.TotalItems;

        if (existingItemIndex >= 0) {
            // If the item already exists, increase quantity
            updatedItems[existingItemIndex].quantity += 1; // Track the quantity
            updatedTotalAmount += product.MRP; // Increment total amount
        } else {
            // Item is new, add it to the cart
            const newItem = {
                ...product,
                quantity: 1, // Initialize quantity for new items
            };
            updatedItems.push(newItem); // Add new item to the Items array
            updatedTotalAmount += product.MRP; // Add MRP to total amount
        }

        updatedTotalItems = updatedItems.length; // Total items is the length of the Items array

        const newCart = { TotalItems: updatedTotalItems, TotalAmount: updatedTotalAmount, Items: updatedItems };
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart)); // Save to local storage
        console.log('gutaihs na vai');
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart({ TotalItems: 0, TotalAmount: 0, Items: [] }); // Reset cart state
        localStorage.removeItem('cart'); // Remove cart from local storage
        console.log('Cart cleared');
    };

    return (
        <div>
            {products.map((data, index) => (
                <CartChild 
                    key={index}  
                    pdDetails={data}
                    handelAddtoBag={() => handelAddtoBag(data)} // Pass product data to the handler
                />
            ))}
            {/* Optional: Display cart information */}
            <div>
                <h3>Cart Summary</h3>
                <p>Total Items: {cart.TotalItems}</p>
                <p>Total Amount: {cart.TotalAmount}</p>
                <button onClick={clearCart}>Clear Cart</button> {/* Button to clear the cart */}
            </div>
        </div>
    );
};

export default Products;
