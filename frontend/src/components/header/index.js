import React from 'react'
import style from './style.module.css'
import { Container } from 'react-grid-system';

const Header = () => {
    return(
        <Container fluid className={style.container}>
            <span className={style.title}>Logo</span>
        </Container>
    )
}

export default Header;