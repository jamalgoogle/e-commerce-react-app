import React from 'react'
import { Container , Col , Row } from 'reactstrap';

import serviceData from '../assets/data/serviceData';

import './services.css'

export const Services = () => {
  return (
    <section>
        <Container>
            <Row>
                {
                    serviceData.map((itm , idx)=>(
                        <Col lg='3' md='4' key={idx}> 
                        <div className='service__item' style={{background:`${itm.bg}`}}>
                            <span><i class={itm.icon}></i></span>
                            <div>
                                <h3>{itm.title}</h3>
                                <p>{itm.subtitle}</p>
                            </div>
                        </div>
                    </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}
export default Services;
