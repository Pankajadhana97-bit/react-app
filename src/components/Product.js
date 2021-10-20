import { Link } from 'react-router-dom'

const Product = (props) => { 
	return (
		< Link to={`/products/${props.product._id}`}>
			<div className="mx-12 text-center">
				<img src={props.product.image} alt="pizza" />
				<h2 className="text-lg font-bold py-2 flex text-center">{props.product.name}</h2>
				<span className="bg-gray-400 py-1  rounded-full text-sm px-4 text-center">{props.product.size}</span>
				<div className="flex items-center justify-between mt-2">
					<span className="bg-green-100 rounded-full py-1 px-3">{`₹ ${props.product.price}`}</span>
					<button className="bg-yellow-500 py-1 px-4 rounded-full font-bold  hover:bg-yellow-700">Add</button>
				</div>
			</div>
		</Link>
	)
}
export default Product;
