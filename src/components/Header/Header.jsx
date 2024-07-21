
import './header.css'

import {Link, NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container , Row } from 'reactstrap' 

const nav__links = [
  {
    path: 'home',
    display:'home',
  },
  {
    path :'shop',
    display : 'shop',
  },
  {
    path :'cart',
    display : 'cart',
  }, 
]


const Header = () => {

  return <header className='header'>
    <Container>
      <Row>
        <div className='nav__wrapper'>
          <Link to='/home'><div className='logo'>
              <img src={logo} alt="logo" />
              <h1>Multimart</h1>
            </div>
          </Link>
            {/* dynamic navlinks using map function */}
            <div className='navigation'>
              <ul className='menu'>
                {
                  nav__links.map((item , index)=>(
                    <li className='nav__item' key={index}>
                    <NavLink to={item.path}
                    className={(navClass)=> navClass.isActive ? 'nav__active' : ''}
                    >
                      {item.display}
                    </NavLink>
                  </li>   
                  ))
                }
              </ul>
            </div>
            <div className='nav__icons'>

              <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                <span className='badge'>1</span>
              </span>

              <span className='cart__icon'>
                <i class="ri-shopping-bag-line"></i>
                <span className='badge'>3</span>
              </span>
              <span>
                <motion.img whileTap={{scale:1.1}} src={userIcon} alt="user icon" />
              </span>
              <span className='mobile__menu'>
                <i class="ri-menu-line"></i>
              </span>
            </div>
        </div>
      </Row>
    </Container>

  </header>
};
export default Header;