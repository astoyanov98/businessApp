import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-grid-system';
import style from './style.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate  } from "react-router-dom";
import { updatePick } from '../../actions/updatePick'
import { isMobile } from 'react-device-detect';

const Main = () => {
    let [data, setData] = useState([])
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.jsonbin.io/b/6177e9399548541c29c8c0f5')
            .then(res => res.json())
            .then(data => {setData(data);dispatch(updatePick('state', data))})
        
    }, [])

    const handleClick = (curr) => {
        dispatch(updatePick('pickedBusiness', curr))
        navigate("/details");
    }

    return(
        <Container className={style.container} fluid>
            <Row className={style.row}>
                <Col md={2}>
                    <span className={style.table_title}>Name</span>
                </Col>
                <Col align={!isMobile ? 'left': 'center'}>
                    <span className={style.table_title}>Description</span>
                </Col>
            </Row>
            {data.map((curr) => (
                <Row key={curr.id} className={style.row} onClick={() => handleClick(curr)}>
                    <Col md={2}>
                        <span className={style.span}>{curr.name}</span>
                    </Col>
                    <Col align="left">
                        <span className={style.span}>{curr.description}</span>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default Main;