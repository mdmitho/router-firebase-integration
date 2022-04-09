import React from 'react';
import useFirebase from '../../Hook/useFirebase';

const Products = () => {
    const {user} =useFirebase()
    return (
        <div>
            <h2>KOnck knok ! who is there</h2>
            <h5>{user ? user.displayName : 'vooooooooot'}</h5>
        </div>
    );
};

export default Products;