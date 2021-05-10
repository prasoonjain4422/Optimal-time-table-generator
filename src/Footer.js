import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Col } from 'react-bootstrap';


function Footer() {

    var style = {
        backgroundColor: "#242729",
        color: "grey",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        left: "0",
        bottom: "0",
        height: "400px",
        width: "100%",
    }

    var phantom = {
        backgroundColor: "Gainsboro",
        display: 'block',
        padding: '',
        height: "",
        width: '100%',
    }

    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <Row >
                    <Col sm={4}>
                        <Row className="ml-auto ">
                            <Image
                                roundedCircle
                                className="mr-auto"
                                height="80"
                                width="80"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0Kt8i5gW1_qB6Zk__zKDiIXuNESWgwkUig&usqp=CAU"
                            >
                            </Image>
                        </Row>
                        <Row className="ml-auto ">
                            <p><small>© 2021 Copyright Time Table Creator</small></p>
                        </Row>
                    </Col>
                    <Col className="ml-3" >
                        <Row>
                            <h4 style={{ position: "center", color: "Smokewhite" }}>About</h4>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>Prasoon Jain</a>

                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ textAlign: "left", color: "LightGrey" }}>IET DAVV,<br /> Indore</a>
                        </Row>
                        <br />
                    </Col>
                    <Col>
                        <Row>
                            <h4 style={{ color: "Smokewhite" }}>Contact</h4>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>Facebook</a>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>Instagram</a>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>Linked!n</a>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>Twitter</a>
                        </Row>

                    </Col>
                    <Col >
                        <Row>
                            <h4 style={{ color: "Smokewhite" }}>Products</h4>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>econtinuum</a>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>Time-table-site</a>
                        </Row>
                        <br />
                        <Row>
                            <a href="" style={{ color: "LightGrey" }}>Xmeme</a>
                        </Row>
                    </Col>

                </Row>

            </div>
        </div>
    )
}

export default Footer
