import {useState,useEffect} from 'react';
import Product from './Product'
const Products = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://star-spark-pasta.glitch.me/api/products")
			.then(response => response.json())
			.then(products => {
				setProducts(products);
			})
			.catch(err => console.error(err));
	}, []);
	return (
		<>
		<div className="container mx-auto pb-24">
			<h1 className="text-lg font-bold my-8 mx-12">Product</h1>
      <div className="grid grid-cols-5 my-8 gap-20">
				  {
						products.map( product =>{
							return(<Product key={product._id} product={product}/>)
						})
					}
			</div>
		</div>
		</>
	)
}
export default Products;
