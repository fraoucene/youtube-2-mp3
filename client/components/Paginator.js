import React from 'react';
import { Link } from 'react-router';
import { Pager } from 'react-bootstrap';

var Paginator = React.createClass({
	

	render() {
		return <Pager>
		    <Pager.Item 
		    	previous
		    	disabled={this.props.prev}
		    	onClick={this.props.getPrev}
		    	>Previous
	    	</Pager.Item>
		    <Pager.Item 
		    	next 
		    	disabled={this.props.next}
		    	onClick={this.props.getNext}
		    	>Next
	    	</Pager.Item>
  		</Pager>;

	}
});

export default Paginator;