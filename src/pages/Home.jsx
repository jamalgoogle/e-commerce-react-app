import { useState , useEffect } from "react";
import { Container , Row , Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Helmet from '../components/Helmet/Helmet'

import Services from "../services/Services";
import ProductList from "../UI/ProductList";
import Clock from "../UI/Clock";

import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'

import '../Styles/home.css';

import heroImg from '../assets/images/hero-img.png' 


const Home = () =>{
    const [trendingProducts , settrendingProducts] = useState(products)
    const [bestSellingProducts , setBestSellingProducts] = useState(products)
    const [mobileProducts , setMobileProducts] = useState(products)
    const [wirelessProducts , setWirelessProducts] = useState(products)
    const [watchProducts , setWatchProducts] = useState(products)

    const year = new Date().getFullYear();

    useEffect(()=>{
        const filteredTrendingProducts = products.filter(item => item.category === 'chair');
        const filteredBestSellingProducts = products.filter(item => item.category === 'sofa');
        const filteredMobileProducts = products.filter(item => item.category === 'mobile');
        const filteredwirelessProducts = products.filter(item => item.category === 'wireless');
        const filteredWatchProducts = products.filter(item=> item.category === 'watch')

        settrendingProducts(filteredTrendingProducts)
        setBestSellingProducts(filteredBestSellingProducts)
        setMobileProducts(filteredMobileProducts)
        setWirelessProducts(filteredwirelessProducts)
        setWatchProducts(filteredWatchProducts)

    } , [])

    return( 
    <Helmet title='Home'>

        {/* Home   */}
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Trending Product In {year}</p>
                            <h2>Make Your Interior More Minimalistic & Modern</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Earum quisquam accusamus est officiis? Quasi molestias tempore amet repudiandae,
                                 praesentium quis rerum neque fuga numquam, est nostrum placeat quo sit porro.
                            </p>
                            <button className="buy__btn"><Link to='/shop'> SHOP NOW</Link></button>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="hero Img" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
        {/* End Home  */}

        {/* Services  */}
        <Services />
        {/* ENd Services  */}

        {/* TradingProducts  */}
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className="section__title ">Trending Products</h2>
                    </Col>
                    <ProductList data={trendingProducts}/>
                </Row>
            </Container>
        </section>
        {/* End TradingProducts  */}

        {/* BestSellingProduction  */}
        <section className="best__products">
            <Container> 
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className="section__title ">Best Selling Products</h2>
                    </Col>
                    <ProductList data={bestSellingProducts}/>
                </Row>
            </Container>
        </section>
        {/* End BestSellingProduction  */}

        {/* Offers  */}
        <section className="timer__count">
            <Container> 
                <Row>
                    <Col lg='6' md='6'>
                        <div className="clock__top-content">
                            <h3 className="text-white fs-6">Limited Offers</h3>
                            <h4 className="text-white fs-6">Quality Armchair</h4>
                        </div>
                        <Clock />
                        <motion.button whileHover={{scale : 1.05}} className="buy__btn"> 
                            <Link to='/shop'>Visit Store</Link>
                        </motion.button>
                    </Col>
                    <Col lg='6' md='6' className="text-end">
                        <img src={counterImg} />
                    </Col>
                </Row>
            </Container>
        </section>
        {/* End Offers  */}

        {/* NewArrivals */}
        <section className="new__arrivals">
            <Container>
                <Row>   
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">New Arrivals</h2>
                    </Col>
                <ProductList data={mobileProducts}/>
                <ProductList data={wirelessProducts}/>

                </Row>
            </Container>
        </section>
        {/* End NewArrivals */}

        {/* Popularcategory */}
        <section className="popular__category">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section__title">Popular in Category</h2>
                    </Col>
                    <ProductList data={watchProducts}/>
                </Row>
            </Container>
        </section>
        {/* End Popularcategory */}
    </Helmet>
    )
}
export default Home;

