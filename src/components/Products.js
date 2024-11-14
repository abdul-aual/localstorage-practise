import React, { useState, useEffect } from 'react';
import fakedata from './fakedata.json';
import CartChild from './CartChild';

const Products = () => {
    const [products] = useState(fakedata);
    const [cart, setCart] = useState({ TotalItems: 0, TotalAmount: 0, Items: [] });


    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    const handelAddtoBag = (product) => {
        const existingItemIndex = cart.Items.findIndex(item => item.id === product.id);
        let updatedItems = [...cart.Items];
        let updatedTotalAmount = cart.TotalAmount;
        let updatedTotalItems = cart.TotalItems;

        if (existingItemIndex >= 0) {
            updatedItems[existingItemIndex].quantity += 1; 
            updatedTotalAmount += product.MRP; 
        } else {
    
            const newItem = { 
                ...product,
                quantity: 1, 
            };
            updatedItems.push(newItem); 
            updatedTotalAmount += product.MRP; 
        }

        updatedTotalItems = updatedItems.length; 

        const newCart = { TotalItems: updatedTotalItems, TotalAmount: updatedTotalAmount, Items: updatedItems };
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart)); 
    };

    const clearCart = () =>{
        setCart({TotalItems:0 , TotalAmount:0, Items:[]});
        localStorage.removeItem('cart');
    }

    return (
        <div>
            {products.map((data, index) => (
                <CartChild 
                    key={index}  
                    pdDetails={data}
                    handelAddtoBag={() => handelAddtoBag(data)} 
                />
            ))}
            <div>
                <h3>Cart Summary</h3>
                <p>Total Items: {cart.TotalItems}</p>
                <p>Total Amount: {cart.TotalAmount}</p>
                <button onClick={clearCart}>Clear Cart</button> 
            </div>
        </div>
    );
};

export default Products;
