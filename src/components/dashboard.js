import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import DashboardList from "./dashboardList";

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
            <h1 className="Header">Dashboard</h1>
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