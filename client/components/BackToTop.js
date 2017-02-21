import React from 'react';
import classnames from "classnames";

const BackToTop = React.createClass({

	getInitialState: function() {
        return {show: false};
    },

    componentDidMount: function() {
        this.scrollHandler();
        window.onscroll = this.scrollHandler;
    }, 

    componentWillUnmount: function componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }, 

	scrollHandler: function() {
        if (window.pageYOffset > 400) {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }
    },
	
	render() {
        let classes = classnames({
            'backToTop': true,
            'hide': !this.state.show
        });

    return <a className={classes} href="#"></a>;
		
	}
});

export default BackToTop;