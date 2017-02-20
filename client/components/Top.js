import React from 'react';
import { Link } from 'react-router';
import  { API_VIDEO_TYPE } from "../api/constants";

const Top = ({...props}) => {

	if (!props.data) {
		return null;
	}

  	switch (props.kind) {
		case API_VIDEO_TYPE:
			return null;
			break
	  	default:
	  		return <div className="top">
		        <Link to={props.kind}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> Retour</Link>
		        <h2 className="borderTtl">
		            <span><strong> {props.data.title} </strong></span>
		        </h2>
		        <p>{props.data.description}</p>
		    </div>
	  		break
  	}

}

export default Top;
