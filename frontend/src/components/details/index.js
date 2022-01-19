import React from 'react'
import style from './style.module.css'
import { Container, Row, Col } from 'react-grid-system';
import { useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect';

const Details = () => {
    const currentPick = useSelector((state) => { return state.pickedBusiness})
    const allBusiness = useSelector((state) => { return state.state})
    let currentCity = currentPick.address.city;
    let nearbyPlaces = allBusiness.filter((e) => {return e.address.city === currentCity})

    return(
        <Container style={{margin:'40px', padding:'20px'}} className={style.container} fluid>
            <Row style={{marginBottom:'5vh'}} justify='center'>
                <img width={isMobile? '100%': '40%'} src={currentPick.image}/>
            </Row>
            <Row justify='center'>
                <Col align="center">
                    <h1>Address</h1>
                    <span>{currentPick.address.number} {currentPick.address.street}</span><br/>
                    <span>{currentPick.address.city}, {currentPick.address.country} {currentPick.address.zip}</span>
                </Col>
                <Col align={isMobile ? 'center': 'left'}>
                    <h1>Contact</h1>
                    <span>{currentPick.phone}</span><br/>
                    <span>{currentPick.email}</span>
                </Col>
                <Col className={style.places_container} align="center" md={6}>
                    <h1>Nearby Places</h1>
                    {nearbyPlaces.map((e) => (
                        <Row key={e.id} className={style.each_place} justify='center'>
                            <Col md={3} align='left'>{e.name}</Col>
                            <Col align='left'>{e.address.number} {e.address.street}, {e.address.town}, {e.address.zip} </Col>
                        </Row>
                    ))}
                </Col>
            </Row>

        </Container>
    )
}

export default Details