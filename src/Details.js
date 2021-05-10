import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Row, Col } from 'react-bootstrap';

function Details(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.heading}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.data}

                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            {/* {props.footing} */}
                        </Col>
                        <Col>
                            <Button onClick={() => {
                                if (props.getAllHours()) {
                                    { props.onHide() };
                                }
                                else {
                                    { props.resetAllHours() };
                                }
                            }}>Submit</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Details


