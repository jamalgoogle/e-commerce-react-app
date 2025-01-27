import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import '../Styles/product-card.css'
// import prop as item to access data info 
const ProductCard = ({item}) =>{
    return(
    <Col lg='3' md='4'> 
        <div className="product__card">
            <div className="product__img">
            <Link to={`/shop/${item.id}`}><motion.img whileHover={{scale:1.05}} src={item.imgUrl} /></Link>
            </div>
            <div className="product__info">
                <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                <span className=' d-block'>{item.category}</span>
            </div>
            <div className="product__card-bottom d-flex align-items-center justify-content-between">
                <span className='price'>${item.price}</span>
                <motion.span whileTap={{scale:1.2}}><i class='ri-add-line'></i></motion.span>
            </div>
        </div>
    </Col>
    )
}
export default ProductCard;