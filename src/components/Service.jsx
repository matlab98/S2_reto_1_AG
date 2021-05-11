import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

import { BodyRegular2 } from '../styles/Body'
import { Headline2, Headline4, Headline5 } from '../styles/Headline'
import { Row2 } from '../styles/RowContainer'

import '../styles/BodyRegular.css';

const StyledTittle = styled.h1`
    display:block;
    margin-bottom : 28px;
    color:#0F0E17;
    @media (max-width: 768px) {
        display:none;
    }
`
const StyledMinTittle = styled.h1`
    display:none;
    @media (max-width: 768px) {
        display:block;
        margin-bottom:16px;
        color:#0F0E17;
    }
`
const Service = () => {
    return (
        <>
            <StyledTittle><Headline2 name="Servicios" /></StyledTittle>
            <StyledMinTittle><Headline4 name="Servicios" /></StyledMinTittle>
            <Row2>
                <Col xs={12} md={4}>
                    <StyledTittle><Headline4 name="Diseño" /></StyledTittle>
                    <StyledMinTittle><Headline5 name="Diseño" /></StyledMinTittle>

                    <StyledTittle><p className="format">Experiencia de usuario</p></StyledTittle>
                    <StyledTittle><p className="format">Interfaz de usuario</p></StyledTittle>
                    <StyledTittle><p className="format">Aplicaciones web</p></StyledTittle>
                    <StyledTittle><p className="format">Prueba de concepto</p></StyledTittle>

                    <StyledMinTittle><BodyRegular2 name="Experiencia de usuario" /></StyledMinTittle>
                    <StyledMinTittle><BodyRegular2 name="Interfaz de usuario" /></StyledMinTittle>
                    <StyledMinTittle><BodyRegular2 name="Aplicaciones web" /></StyledMinTittle>
                    <StyledMinTittle style={{ marginBottom: "56px" }}><BodyRegular2 name="Prueba de concepto"/></StyledMinTittle>
                </Col>
                <Col xs={12} md={4}>
                    <StyledTittle><Headline4 name="Desarrollo" /></StyledTittle>
                    <StyledMinTittle><Headline5 name="Desarrollo" /></StyledMinTittle>

                    <StyledTittle><p className="format">Aplicaciones móviles</p></StyledTittle>
                    <StyledTittle><p className="format">Sitios web</p></StyledTittle>
                    <StyledTittle><p className="format">Aplicaciones web progresivas</p></StyledTittle>

                    <StyledMinTittle><BodyRegular2 name="Aplicaciones móviles" /></StyledMinTittle>
                    <StyledMinTittle><BodyRegular2 name="Sitios web" /></StyledMinTittle>
                    <StyledMinTittle style={{ marginBottom: "56px",  }}><BodyRegular2 name="Aplicaciones web progresivas" /></StyledMinTittle>
                </Col>
                <Col xs={12} md={4}>
                    <StyledTittle><Headline4 name="Marca" /></StyledTittle>
                    <StyledMinTittle><Headline5 name="Marca" /></StyledMinTittle>

                    <StyledTittle><p className="format">Identidad de la marca</p></StyledTittle>
                    <StyledTittle><p className="format">Estrategia de marca</p></StyledTittle>

                    <StyledMinTittle><BodyRegular2 name="Identidad de la marca" /></StyledMinTittle>
                    <StyledMinTittle style={{ marginBottom: "56px" }}><BodyRegular2 name="Estrategia de marca" /></StyledMinTittle>
                </Col>
            </Row2>
        </>
    )
}

export default Service
