import { Routes , Route , Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'


const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='home' element={<Home />} />
        <Route path='Checkout' element={<Checkout />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='Login' element={<Login />} />
        <Route path='ProductDetails' element={<ProductDetails />} />
        <Route path='Shop/:id' element={<Shop />} />
        <Route path='Signup' element={<Signup />} />
    </Routes>
};

export default Routers;