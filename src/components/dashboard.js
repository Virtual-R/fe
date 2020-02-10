import React, { useState, useEffect } from "react";
import { Container, Col, Row, CardImg } from 'reactstrap';
import axios from 'axios';
import DashboardList from "./dashboardList";
import NavBar from "./NavBar"
import "./dashboard.scss";

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
            <img src="vrpic.png"/>  
            <h1 className="Header">DASHBOARD</h1>
            <Row>
                {project.map((item, id) => {
                    return (
                        <Col> <DashboardList key={id} setProject={item} /> </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default DashboardContainer;