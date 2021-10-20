import { Link } from 'react-router-dom';
const Navigation = () => {
	const cartStyle = {
		background: '#F59E0D',
		display: 'flex',
		padding: '6px 12px',
		borderRadius: '50px'
	}
	return (
		<>
			<nav className="container mx-auto flex items-center justify-between py-5 px-9">
				<Link to="/">
					<img className="h-60px" src="/pictures/logo.png" alt="logo" />
				</Link>
				<ul className="flex items-center" >
					<li className="ml-5 text-lg font-bold"><Link to="/">Home</Link></li>
					<li className="ml-5 text-lg font-bold"><Link to="/products">Products</Link></li>
					<li className="ml-5 "><Link to="/cart">
						<div style={cartStyle}>
							<span className="ml-2 text-white-300 text-lg font-bold">10</span>
							<img className="ml-2" src="/pictures/cart.png" alt="cart" />
						</div>
					</Link></li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation;
