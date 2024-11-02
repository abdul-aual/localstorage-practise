import React from 'react';

const CartChild = (props) => {
    const { Nm, stk, MRP, } = props.pdDetails;

    return (
        <div style={{margin:'5px'}}>
            <div style={{ border: '1px solid lightgray', textAlign: 'center', maxWidth: '350px', margin: '0 auto', borderRadius: '5px', paddingBottom:'10px' }} >
                <h2>{Nm}</h2>
                <small>{stk}-Left in stock. Order soon....</small>
                <p>Price: {MRP}</p>
                <button onClick={props.handelAddtoBag}>Add to Bag</button>

            </div>
        </div>
    );
};

export default CartChild;