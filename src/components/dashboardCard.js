import React from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, Row
  } from 'reactstrap';

  const DashboardCard = props => {
      return (
          <Row>
              <CardBody> 
                  <CardTitle>{props.data.setProject.title}</CardTitle>
                  <CardSubtitle>{props.data.setProject.description}</CardSubtitle>
      <CardSubtitle>{props.data.setProject.goal_amount}</CardSubtitle>
              </CardBody>
          </Row>
      )
  }

export default DashboardCard;