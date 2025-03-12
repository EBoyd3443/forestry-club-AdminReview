import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

function AdminNotify({ id, name, time_in, time_out, date_volunteered, date_submitted, onAccept = ()=>{}, onDeny = ()=>{} }) {

    const submission_id = id;
    const time_in_readable = new Date(time_in).toLocaleTimeString();
    const time_out_readable = new Date(time_out).toLocaleTimeString();
    const date_volunteered_readable = new Date(date_volunteered).toLocaleDateString();
    const date_submitted_readable = new Date(date_submitted).toLocaleDateString();


    return (
        <Toast>
            <Toast.Header closeButton={false}>
                <strong>{name}</strong>
            </Toast.Header>
            <Toast.Body>
                <Row>
                    <Col>
                        <strong>Date of Volunteer:</strong> {date_volunteered_readable}<br />
                        <strong>Time In:</strong> {time_in_readable}<br />
                        <strong>Time Out:</strong> {time_out_readable}<br />
                        <strong>Submitted on:</strong> {date_submitted_readable}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="secondary" onClick={onDeny(submission_id)}>Deny</Button>
                        <Button variant="primary" onClick={onAccept(submission_id)}>Accept</Button>
                    </Col>
                </Row>


            </Toast.Body>
        </Toast>

    )
}

AdminNotify.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    time_in: PropTypes.instanceOf(Date),
    time_out: PropTypes.instanceOf(Date),
    date_volunteered: PropTypes.instanceOf(Date),
    date_submitted: PropTypes.instanceOf(Date),
    onAccept: PropTypes.func,
    onDeny: PropTypes.func
}

export default AdminNotify;