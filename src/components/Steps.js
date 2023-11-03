import React from 'react';
import '../App.css';
import { CardImg, Badge, CardImgOverlay, CardText, CardTitle, Container, Row, Col } from 'reactstrap';

export default function Step() {
  if (window.innerWidth <= 576) {
    return (
      <Container className='m-0 p-0'>
        <CardImg
          alt="Card image cap"
          src="../multiStepForm/images/bg-sidebar-mobile.svg"
        />
        <CardImgOverlay>
          <Row>
            <Col className='col-3 p-0'>
              <Badge>
                1
              </Badge>
            </Col>
            <Col className='col-3 p-0'>
              <Badge>
                2
              </Badge>
            </Col>
            <Col className='col-3 p-0'>
              <Badge>
                3
              </Badge>
            </Col>
            <Col className='col-3 p-0'>
              <Badge>
                4
              </Badge>
            </Col>
          </Row>
        </CardImgOverlay>
      </Container>
    )
  } else {
    return (
      <Container className='m-0 p-0'>
        <CardImg
          alt="Card image cap"
          src="../multiStepForm/images/bg-sidebar-desktop.svg"
        />
        <CardImgOverlay>
          <Row className='mb-3'>
            <Col className='col-md-2'>
              <Badge className='badge'>
                1
              </Badge>
            </Col>
            <Col className='col-md-10 ps-md-0'>
              <CardTitle tag="h6">
                Step 1
              </CardTitle>
              <CardText>
                Your info
              </CardText>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col className='col-md-2'>
              <Badge className='badge'>
                2
              </Badge>
            </Col>
            <Col className='col-md-10 ps-md-0'>
              <CardTitle tag="h6">
                Step 2
              </CardTitle>
              <CardText>
                Select plan
              </CardText>
            </Col></Row>
          <Row className='mb-3'>
            <Col className='col-md-2'>
              <Badge className='badge'>
                3
              </Badge>
            </Col>
            <Col className='col-md-10 ps-md-0'>
              <CardTitle tag="h6">
                Step 3
              </CardTitle>
              <CardText>
                Add-ons
              </CardText>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col className='col-md-2'>
              <Badge className='badge'>
                4
              </Badge>
            </Col>
            <Col className='col-md-10 ps-md-0'>
              <CardTitle tag="h6">
                Step 4
              </CardTitle>
              <CardText>
                Summary
              </CardText>
            </Col>
          </Row>
        </CardImgOverlay>
      </Container>
    );
  }
}