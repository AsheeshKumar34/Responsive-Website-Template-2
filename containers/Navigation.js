import React, {Component} from 'react';

export default class Navigation extends Component {
    render () {
        return(
            <div>
                <header>
                    <div className="navbar navbar-fixed-top">
                        <div className="container">
                            <nav className="navbar navbar-default" role="navigation">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a href="" className="navbar-brand">OYODO</a>
                                </div>
                                <div className="collapse navbar-collapse" id="navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">DAPIBUS</a></li>
                                        <li><a href="#">ULTRICIES</a></li>
                                        <li><a href="#">BIBENDUM</a></li>
                                        <li><a href="#">MAGNA</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>          
        );
    }
}