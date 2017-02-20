import React from 'react';
import { Link } from 'react-router';
var Footer = React.createClass({
    
    render() {  
        return (
            <footer id="footer" className="footer">
                <center>
                    <div className="container">
                        <div className="links">
                            <a className="fa fa-facebook fa-2x" href="http://facebook.com/ThemeXpert" target="_blank"></a>
                            <a className="fa fa-twitter fa-2x" href="http://twitter.com/themexpert" target="_blank"></a>
                            <a className="fa fa-linkedin fa-2x" href="http://twitter.com/themexpert" target="_blank"></a>
                            <a className="fa fa-github fa-2x" href="http://github.com/themexpert" target="_blank"></a>
                        </div>
                        <div className="links">
                            <p>
                                <Link to="/">Home</Link>
                                <Link to="/video">Videos</Link>
                                <Link to="/playlist">Playlist</Link>
                                <Link to="/channel">Channels</Link>
                                {/*<Link to="/url">From urls</Link>*/}
                                <Link to="/contact">Contact</Link>
                            </p>
                        </div>
                        <p>Copyright &copy; 2017 - IT Developers  2017</p>
                    </div>
                </center>
            </footer>
                );
    }
});


export default Footer;