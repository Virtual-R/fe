import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import DashboardList from "./dashboardList";
import NavBar from "./NavBar"
import "./dashboard.scss";
import "./images/picvr.svg"

const DashboardContainer = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        axios.get('https://sixr-clone.herokuapp.com/api/overview')
        .then(response => {
            setProject(response.data)
        })
        .catch(error => {console.log('error', error)})
    }, [])

    return (
        <Container>
        <NavBar /> 
            <img src={require('./images/picvr.svg')}/>
            <h1 className="Header">DASHBOARD</h1>
            <Col  className="containerClass"> 
                {project.map((item, id) => {
                    return (
                        <Row className="projectClass"> <DashboardList key={id} setProject={item} /> </Row>
                    )
                })}
            </Col>
        </Container>
    )
}

export default DashboardContainer;