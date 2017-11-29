import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <footer>
                    <div className="container" id="footer">
                        <div className="row">
                            <div className="col-sm-4">
                                <h4>About Us</h4>
                                <p><a href="#">Trestique Malesuada</a></p>
                                <p><a href="#">Cursus</a></p>
                                <p><a href="#">Consectetur</a></p>
                                <p><a href="#">Euismod Vulputate</a></p>
                            </div>
                            <div className="col-sm-4">
                                <h4>Legal</h4>
                                <p><a href="#">Trestique Malesuada</a></p>
                                <p><a href="#">Cursus</a></p>
                                <p><a href="#">Consectetur</a></p>
                            </div>
                            <div className="col-sm-4">
                                <h4>Developers</h4>
                                <p><a href="#">Trestique Malesuada</a></p>
                                <p><a href="#">Cursus</a></p>
                                <p><a href="#">Consectetur</a></p>
                                <p><a href="#">Euismod Vulputate</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}