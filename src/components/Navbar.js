import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to='/products' >products</Link>   </li>
                <li><Link to='cart'>cart</Link>   </li>
            </ul>
        </div>
    );
};

export default Navbar;