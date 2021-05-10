import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Table } from 'react-bootstrap';

function Tablize(props) {

    let [day, setd] = React.useState(
        Array.from({ length: 50 }, v => (
            Array.from({ length: 50 }, v => Array.from({ length: 50 }, v => { <div></div> })))));

    const datam = [];
    const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

    function back(i) {
        day[i] = Array.from({ length: 50 }, v => Array.from({ length: 50 }, v => { <div></div> }));
        for (let j = 0; j < props.no_of_days; j++) {
            day[i][j].push(<td><center>{days[j]}</center></td>);
            for (let k = 0; k < props.no_of_Lectures; k++) {

                if ((props.no_of_Lectures % 2) !== 0) {
                    if (k === Math.floor((props.no_of_Lectures - 1) / 2)) {
                        day[i][j].push(<td><center> --- </center></td>);
                    }
                }


                if (props.time_table[i][k][j] !== 0) {
                    day[i][j].push(<td><center>{props.time_table[i][k][j]} <br /> {props.faculty_names[props.time_table[i][k][j] - 1]}</center></td>);
                }
                else
                    day[i][j].push(<td><center></center></td>);



                if ((props.no_of_Lectures % 2) === 0) {
                    if (k === Math.floor((props.no_of_Lectures - 1) / 2)) {
                        day[i][j].push(<td><center> --- </center></td>);
                    }
                }
            }
        }
    }

    for (let i = 0; i < props.no_of_classes; i++) {
        back(i);
        datam.push(<div>
            <h3>For Classroom {i + 1}</h3>
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

export default Tablize
