import React from 'react';
import '../style/App.css';
import bgSidebarMobile from '../assets/images/bg-sidebar-mobile.svg'
import bgSidebarDesktop from '../assets/images/bg-sidebar-desktop.svg'
import { CardImg, CardImgOverlay, CardText, CardTitle, Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function Step() {
  //mobile
  if (window.innerWidth <= 576) {
    const Items = () => {
      const list = [1, 2, 3, 4]
      if (window.location.pathname === '/multiStepForm') {
        const listItems = list.map((item, index) =>
          (index === 0) ?
            (<PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
              <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                {item}
              </PaginationLink>
            </PaginationItem>)
            :
            (<PaginationItem key={index + 1} disabled>
              <PaginationLink href="#">
                {item}
              </PaginationLink>
            </PaginationItem>)
        )
        return (
          listItems
        )
      }
      if (window.location.pathname === '/multiStepForm/plan') {
        const listItems = list.map((item, index) =>
          (index === 1) ?
            (<PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
              <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                {item}
              </PaginationLink>
            </PaginationItem>)
            :
            (<PaginationItem key={index + 1} disabled>
              <PaginationLink href="#">
                {item}
              </PaginationLink>
            </PaginationItem>)
        )
        return (
          listItems
        )
      }
      if (window.location.pathname === '/multiStepForm/addOns') {
        const listItems = list.map((item, index) =>
          (index === 2) ?
            (<PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
              <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                {item}
              </PaginationLink>
            </PaginationItem>)
            :
            (<PaginationItem key={index + 1} disabled>
              <PaginationLink href="#">
                {item}
              </PaginationLink>
            </PaginationItem>)
        )
        return (
          listItems
        )
      }
      if (window.location.pathname === '/multiStepForm/finishingUp') {
        const listItems = list.map((item, index) =>
          (index === 3) ?
            (<PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
              <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                {item}
              </PaginationLink>
            </PaginationItem>)
            :
            (<PaginationItem key={index + 1} disabled>
              <PaginationLink href="#">
                {item}
              </PaginationLink>
            </PaginationItem>)
        )
        return (
          listItems
        )
      }
    }
    return (
      <Container className='m-0 p-0'>
        <CardImg
          alt="Card image cap"
          src={bgSidebarMobile}
        />
        <CardImgOverlay>
          <Pagination>
            {Items()}
          </Pagination>
        </CardImgOverlay>
      </Container>
    )
  } else {
    //tablet & desktop
    const list = [1, 2, 3, 4]
    const StepNumbers = () => {
      if (window.location.pathname === '/multiStepForm' || window.location.pathname === '/multiStepForm/') {
        const listItems = list.map((item, index) =>
          (index === 0) ?
            (
              <PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
                <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
            :
            (
              <PaginationItem key={index + 1} disabled>
                <PaginationLink href="#">
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
        )
        return (
          listItems
        )
      }
      if (window.location.pathname === '/multiStepForm/plan') {
        const listItems = list.map((item, index) =>
          (index === 1) ?
            (
              <PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
                <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
            :
            (
              <PaginationItem key={index + 1} disabled>
                <PaginationLink href="#">
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
        )
        return (
          listItems
        )
      }
      if (window.location.pathname === '/multiStepForm/addOns') {
        const listItems = list.map((item, index) =>
          (index === 2) ?
            (
              <PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
                <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
            :
            (
              <PaginationItem key={index + 1} disabled>
                <PaginationLink href="#">
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
        )
        return (
          listItems
        )
      }
      if (window.location.pathname === '/multiStepForm/finishingUp' || window.location.pathname === '/multiStepForm/summary') {
        const listItems = list.map((item, index) =>
          (index === 3) ?
            (
              <PaginationItem key={index + 1} disabled style={{ backgroundColor: 'hsl(206, 94%, 87%)' }}>
                <PaginationLink href="#" style={{ color: 'hsl(213, 96%, 18%)' }}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
            :
            (
              <PaginationItem key={index + 1} disabled>
                <PaginationLink href="#">
                  {item}
                </PaginationLink>
              </PaginationItem>
            )
        )
        return (
          listItems
        )
      }
    }
    const StepText = () => {
      const list = [1, 2, 3, 4]
      const text = ['Your info', 'Select plan', 'Add-ons', 'Summary']
      const titleTextItems = list.map((item, index) => {
        let t = text[index]
        return (<Col key={index} className='flexCol'>
          <CardTitle tag="h6">
            Step {item}
          </CardTitle>
          <CardText >
            {t}
          </CardText>
        </Col>)
      })
      return (titleTextItems)
    }
    return (
      <Container className='m-0 p-0'>
        <CardImg
          alt="Card image cap"
          src={bgSidebarDesktop}
        />
        <CardImgOverlay className='ps-md-0'>
          <Row>
            <Col className='col-xl-3 col-md-4 col-sm-3 ps-sm-0'>
              <Pagination>
                {StepNumbers()}
              </Pagination>
            </Col>
            <Col className='col-xl-9 col-md-8 col-sm-9 ps-md-0'>
              {StepText()}
            </Col>
          </Row>
        </CardImgOverlay>
      </Container>
    );
  }
}