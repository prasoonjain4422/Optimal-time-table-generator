import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Table } from 'react-bootstrap';

function Tablizef(props) {

    let [day, setd] = React.useState(
        Array.from({ length: 50 }, v => (
            Array.from({ length: 50 }, v => Array.from({ length: 50 }, v => { <div></div> })))));

    const datam = [];
    const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

    function back(i) {
        day[i] = Array.from({ length: 50 }, v => Array.from({ length: 50 }, v => { <div></div> }));
        for (let j = 0; j < props.no_of_days; j++) {
            let p = 0;
            day[i][j].push(<td><center>{days[j]}</center></td>);
            for (let k = 0; k < props.no_of_Lectures; k++) {
                for (let m = 0; m < props.no_of_classes; m++) {
                    if (props.time_table[m][k][j] === (i + 1)) {
                        for (p; p < k; p++) {

                            if ((props.no_of_Lectures % 2) !== 0) {
                                if (p === Math.floor((props.no_of_Lectures - 1) / 2)) {
                                    day[i][j].push(<td><center> --- </center></td>);
                                }
                            }

                            day[i][j].push(<td><center></center></td>);

                            if ((props.no_of_Lectures % 2) === 0) {
                                if (p === Math.floor((props.no_of_Lectures - 1) / 2)) {
                                    day[i][j].push(<td><center> --- </center></td>);
                                }
                            }
                        }

                        if ((props.no_of_Lectures % 2) !== 0) {
                            if (p === Math.floor((props.no_of_Lectures - 1) / 2)) {
                                day[i][j].push(<td><center> --- </center></td>);
                            }
                        }

                        day[i][j].push(<td><center>Classroom {m + 1} <br /></center></td>);
                        if ((props.no_of_Lectures % 2) === 0) {
                            if (p === Math.floor((props.no_of_Lectures - 1) / 2)) {
                                day[i][j].push(<td><center> --- </center></td>);
                            }
                        }
                        p++;
                        break;
                    }
                    // else
                }
            }
            // day[i][j].push(<td><center>{p}</center></td>);
            for (p; p < props.no_of_Lectures; p++) {
                if ((props.no_of_Lectures % 2) !== 0) {
                    if (p === Math.floor((props.no_of_Lectures - 1) / 2)) {
                        day[i][j].push(<td><center> --- </center></td>);
                    }
                }

                day[i][j].push(<td><center></center></td>);

                if ((props.no_of_Lectures % 2) === 0) {
                    if (p === Math.floor((props.no_of_Lectures - 1) / 2)) {
                        day[i][j].push(<td><center> --- </center></td>);
                    }
                }

            }
        }
    }

    for (let i = 0; i < props.no_of_faculties; i++) {
        back(i);
        datam.push(<div>
            <h3>For Faculty {i + 1} ({props.faculty_names[i]})</h3>
            <Table striped bordered hover size="sm" responsive striped bordered hover variant="success">
                <thead>
                    <tr>
                        <th>#</th>
                        {props.data}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {day[i][0]}
                    </tr>
                    <tr>
                        {day[i][1]}
                    </tr>
                    <tr>
                        {day[i][2]}
                    </tr>
                    <tr>
                        {day[i][3]}
                    </tr>
                    <tr>
                        {day[i][4]}
                    </tr>
                    <tr>
                        {day[i][5]}
                    </tr>
                </tbody >
            </Table >
        </div>
        );
    }

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

                    {datam}

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Tablizef
