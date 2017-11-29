import React, {Component} from 'react';

export default class RelatedArticles extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <section className="related">
                        <h3 className="main-article-subheading"><span>Related Articles</span></h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src = "./src/img/river.jpg" alt=""/>
                                    <div className="caption">
                                        <h3>Lorem Cras Pellentesque</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, ante id feugiat aliquam, dui erat sodales turpis, eu lobortis eros lorem id risus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src = "./src/img/highway.jpg" alt=""/>
                                    <div className="caption">
                                        <h3>Bibendum Sit Elit</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer egestas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src = "./src/img/pexels.jpeg" alt=""/>
                                    <div className="caption">
                                        <h3>Malesuada Consectetur</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, ante id feugiat aliquam, dui erat sodales turpis, eu lobortis eros lorem id risus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src = "./src/img/street.jpg" alt=""/>   
                                    <div className="caption">
                                        <h3>Inceptos Justo Tristique Fringilla</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, ante id feugiat aliquam, dui erat sodales turpis, eu lobortis eros lorem id risus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src = "./src/img/wall.jpeg" alt=""/>
                                    <div className="caption">
                                        <h3>Etiam Mattis Vulputate Purus</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, ante id feugiat aliquam, dui erat sodales turpis, eu lobortis eros lorem id risus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}