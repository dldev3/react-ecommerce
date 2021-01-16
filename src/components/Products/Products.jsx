import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running Shoes',
        price: '$12.99'
    },
    {
        id: 2,
        name: 'Computer',
        description: 'Surface Laptop',
        price: '$699'
    },
    {
        id: 3,
        name: 'Lamp',
        description: 'Table Lamp',
        price: '$9.99'
    },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}


export default Products;

