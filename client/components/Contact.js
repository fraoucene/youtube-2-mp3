import React from 'react';
import { FormGroup, Col, FormControl, ControlLabel, Form, Button } from 'react-bootstrap';

const Contact = ({...props}) => {

	return <Form id="contact" horizontal className="contact">
	    <FormGroup controlId="formHorizontalEmail">
      		<Col componentClass={ControlLabel} sm={2}> Email </Col>
      		<Col sm={10}>
        		<FormControl type="email" placeholder="Email address" />
      		</Col>
    	</FormGroup>

    	<FormGroup controlId="formHorizontalMessage">
      		<Col componentClass={ControlLabel} sm={2}> Message </Col>
      		<Col sm={10}>
        		<FormControl componentClass="textarea" placeholder="text" />
      		</Col>
    	</FormGroup>
    	<Button type="submit" className="btn"> Envoyer </Button>
    </Form>;
}

export default Contact;