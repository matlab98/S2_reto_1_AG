import React from 'react'
import { Button, Container, Image, Row } from 'react-bootstrap'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

//Components
import DescriptionProjects from '../components/DescriptionProjects'
import Header from '../components/Header'
import NavH from '../components/Nav'
import Project from '../components/Project'
import Service from '../components/Service'
import Testimony from '../components/Testimony'
import Footer from '../components/Footer';

//Containers
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Testimonials from './Testimonials'
import Contacts from './Contacts';

//Styles
import { Headline2, Headline4 } from '../styles/Headline'
import { Container2, Row2 } from '../styles/RowContainer'

//Imagenes
import ImgHombre from '../files/perfilHombre.jpeg'
import ImgHombre2 from '../files/perfilHombre2.png'
import ImgHombre3 from '../files/perfilHombre3.png'
import ImgMujer from '../files/perfilMujer.png'
import ImgMujer2 from '../files/perfilMujer2.png'

import Banner from '../files/banner.jpg'
import Contact from '../components/Contact';
import Img from '../files/mascotas.jpg'
import Img2 from '../files/principeFresco.jpg'
import Img3 from '../files/Doc.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const StyledImageBanner = styled(Image)`
    width: 100%;
    height: auto;
`

const StyleDivProjects = styled.div`
    text-align : center;
    &:hover {
        color: white; 
    }
`
const StyledButton = styled(Button)`
    width: 297px;
    height: 64px;
    
    &:hover ${StyledButton} {
    background-color: #F25F4C;
    }

    @media (max-width: 768px) {
        width:100%;
        height: 64px;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px; 
    color: #F25F4C; 
    margin-left: 0px;
    margin-bottom: -5px;

    &:hover{
        color: #ffffff; 
    }
`

const StyledTitulo1 = styled.h1`
    display:block;
    margin-bottom:48px;
    @media (max-width: 768px) {
        display:none;
    }
`
const StyledTitulo2 = styled.h1`
    display:none;
    @media (max-width: 768px) {
        display:block;
        margin-bottom:24px;
    }
`

const App = () => {
    return (
        <>
            <NavH/>
            <Hero>
                <Header/>
            </Hero>
            <Projects>
                <DescriptionProjects/>
                <Row2 style={{ textAlign: "center" }}>
                    <Project proyectos={["Adopci??n de mascotas", "Adopta una mascota es tu oportunidad para...", Img, "https://github.com/matlab98/Spring-1-App_Adoption-AG", "https://matlab98.github.io/Spring-1-App_Adoption-AG/"]}/>
                    <Project proyectos={["Pr??ncipe fresco", "La serie est?? protagonizada por Will Smith como una versi??n ficticia de s??...", Img2, "https://github.com/elverytr/PrincipeFresco", "https://elverytr.github.io/PrincipeFresco/"]}/>
                    <Project proyectos={["Documentaci??n t??cnica", "La documentaci??n del lenguaje R, en una forma f??cil de entender...", Img3, "https://github.com/matlab98/Documentacion_tecnica_AG", "https://matlab98.github.io/Documentacion_tecnica_AG/"]}/>
                </Row2>
                <StyleDivProjects>
                    <a href="https://github.com/matlab98" target="_blank"><StyledButton variant="outline-danger">Ver m??s proyectos <StyledIcon icon={faArrowRight} /></StyledButton></a>
                </StyleDivProjects>
            </Projects>
            <Services>
                <Service/>
            </Services>
            <Testimonials>
                <StyledTitulo1><Headline2 name="Testimonios"/></StyledTitulo1>
                <StyledTitulo2><Headline4 name="Testimonios"/></StyledTitulo2>
                <Container2 fluid>
                    <Row2>
                        <Testimony personas={["Juan Antonio", "Tengo algunos a??os trabajando con Javascript y a??n as?? aprend?? varias cosas importantes de Hilder y como utiliza Javascript en el d??a a d??a.", ImgMujer]} />
                        <Testimony personas={["Albert Flores", "Me gusto ver el porqu?? de las cosas del core de React, saber la magia que ocurre por detr??s, excelente Hilder gran vocaci??n.", ImgHombre]} />
                        <Testimony personas={["Darlene Robertson", "Ayuda a entender el porqu?? de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.", ImgHombre2]} />
                    </Row2>
                    <Row2>
                        <Testimony personas={["Jane Cooper", "La forma como realiza y trabaja los temas Hilder, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS.", ImgMujer2]} />
                        <Testimony personas={["Eleanor Pena", "Hilder ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llev?? 1,5 meses.", ImgMujer]} />
                        <Testimony personas={["Guy Hawkins", "Hilder ha superado mis expectativas desde el dise??o hasta el desarrollo.", ImgHombre3]} />
                    </Row2>
                </Container2>
            </Testimonials>
            <StyledImageBanner src={Banner} alt="Imagen de banner representativa" fluid/>
            <Contacts>
                <Contact/>
            </Contacts>
            <Footer />
        </>
    )
}

export default App
