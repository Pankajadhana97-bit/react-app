import React from 'react'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from  './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Navigation from './components/Navigation';
import SingleProduct from './pages/SingleProduct';
export default function App() {
	return (
		<>
			<Router>
				<Navigation/>
				<Switch>
          <Route path="/" component={Home} exact></Route>
					<Route path="/products" component={Products} exact ></Route>
				  <Route path="/products/:_id" component={SingleProduct}></Route>
					<Route path="/cart" component={Cart}></Route>
				</Switch>
			</Router>
		</>
	)
}
