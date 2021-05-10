import React from 'react'
import Filling from './Filling'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Jumbotron } from 'react-bootstrap';

function Content() {

    // var style = {
    //     backgroundColor: "Gainsboro",
    //     borderStyle: "solid",
    //     borderWidth: "2px 2px",
    //     borderColor: "SlateGrey",
    //     color: "grey",
    //     borderTop: "1px solid #E7E7E7",
    //     left: "0",
    //     bottom: "0",
    //     height: "1200px",
    //     width: "100%",
    // }

    return (
        <div style={{ backgroundColor: "#fbf2d4", color: "black" }}>

            <Card
                style={{ borderStyle: "solid", borderWidth: "3px 3px", borderColor: "DarkSlateGrey" }}
                bg="light"
                text='black'
            >

                <Card.Header style={{ textAlign: "center" }}>
                    <h2>Stop! stressing your mind over making time tables.</h2>
                    <h6>Make Multiple Classrooms time-tables with the same set of Faculties.</h6>
                </Card.Header>

                <Container className="mt-5">
                    <Col md={{ span: 10, offset: 1 }}>

                        <Jumbotron style={{ backgroundColor: "Lavender", borderStyle: "solid", borderWidth: "3px", borderColor: "DarkSlateGrey", color: "DarkSlateGrey" }}>
                            <h1 style={{ color: "black" }}><b><i>Getting started</i></b></h1>
                            <hr />
                            <hr />
                            <i>
                                <strong>
                                    <Filling />
                                </strong>
                            </i>
                        </Jumbotron>
                    </Col>
                </Container>
            </Card>
        </div>
    )
}

export default Content
