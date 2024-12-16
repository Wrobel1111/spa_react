import React, { useEffect, useState } from 'react';

function ProductItem(product)
{
	var [products, setProducts] = useState([]);
	useEffect(() =>
	{
		setProducts([
			{
				"id": 1,
				"title": "iPhone 14",
				"brand": "Apple"
			},
			{
				"id": 2,
				"title": "iPad Air",
				"brand": "Apple"
			},
			{
				"id": 3,
				"title": "Galaxy A51",
				"brand": "Samsung"
			}
		])
	}, []);
	return (<div><h1>List of products</h1><ul>{products.map((item) => {return <li key={item.id}>{item.title} {item.brand}</li>})}</ul></div>)
}
export default ProductItem;