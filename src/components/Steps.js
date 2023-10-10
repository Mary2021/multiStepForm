import React from 'react';
import '../App.css';
import { CardImg, Badge, CardImgOverlay, CardText, CardTitle, Container } from 'reactstrap';

export default function Step() {
  return (
    <Container className='m-0 p-0'>
      <CardImg
        alt="Card image cap"
        src="../images/bg-sidebar-desktop.svg"
      />
      <CardImgOverlay>
        <Badge>
          1
        </Badge>
        <CardTitle tag="h6">
          Step 1
        </CardTitle>
        <CardText>
          Your info
        </CardText>
        <Badge>
          2
        </Badge>
        <CardTitle tag="h6">
          Step 2
        </CardTitle>
        <CardText>
          Select plan
        </CardText>
        <Badge>
          3
        </Badge>
        <CardTitle tag="h6">
          Step 3
        </CardTitle>
        <CardText>
          Add-ons
        </CardText>
        <Badge>
          4
        </Badge>
        <CardTitle tag="h6">
          Step 4
        </CardTitle>
        <CardText>
          Summary
        </CardText>
      </CardImgOverlay>
    </Container>
  );
}