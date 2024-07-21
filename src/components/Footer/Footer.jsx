import React from 'react'
import { Container,Row , Col , ListGroup , ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'


import './footer.css'
export const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <h1 className='text-white'>Maltimart </h1>
            </div>
            <p className='footer__text mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Tempora reprehenderit ullam labore deleniti, sint ipsa obcaecati delectus.
            </p>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
                <h4 className='quick__links-title'>Contact</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <p>Mobile Phones</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <p>Modern Sofa</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <p>Arm Chair</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <p>Smart Watches</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
          </Col>
          <Col lg='2'>
            <div className="footer__quick-links">
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 pt-2'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 pt-2'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 pt-2'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 pt-2'>
                  <Link to='#'>Privary Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
              <div className="footer__quick-links">
                <h4 className='quick__links-title'>Contact</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class='ri-map-pin-line'></i></span>
                    <p>123 ZindaBazar , Sylhet , Bangladesh</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
                    <span><i class='ri-phone-line'></i></span>
                    <p>+202032456</p>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
                    <span><i class='ri-mail-line'></i></span>
                    <p>exapmbel123@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>Copyright@{year} - developen by Jamal Google all right reversed</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;