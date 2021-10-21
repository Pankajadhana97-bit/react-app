import Products from '../components/Products'
export default function Home() {
	return (
		<>
			<div className="hero py-16 flex items-center justify-between">
				<div className="w-1/2 px-10 py-10 ml-10">
					<h6 className="text-lg"><em>Bukh lagi hai ??</em></h6>
					<h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
					<button className="px-6 py-2 rounded-full tet-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-700 ">Order Now</button>
				</div>
				<div className="w-1/2 flex justify-between">
					<img className="w-4/5" src="/pictures/pizza.png" alt="pizza" />
				</div>
			</div>

			<div className="pb-24">
				<Products/>
			</div>
		</>
	)
}
