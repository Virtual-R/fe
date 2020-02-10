import React from 'react';
import {
    CardBody, 
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';
import './dashboardCard.scss'

  const DashboardCard = props => {
      return (
          <Col>
              <CardBody className="bodyClass"> 
                  <CardTitle className="titleClass">{props.data.setProject.title}</CardTitle>
                  <CardSubtitle className="subtitleClass">{props.data.setProject.description}</CardSubtitle>
                  <CardSubtitle className="goalClass">{props.data.setProject.goal_amount}</CardSubtitle>
              </CardBody>
          </Col>
      )
  }

export default DashboardCard;