import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

// const Products = (props) => (
//     <h2>List of Products</h2>
// );

// export default Products;

const Products = ({ dispatch, products }) => {

    function handleDelte(id) {
        dispatch({
            type: 'products/delete',
            payload: id,
        });
    }
    return (
        <div>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelte} products={products} />
        </div>
    )
}

export default connect(({ products }) => ({
    products,
}))(Products);