import React, {Component} from 'react';

export default class MainArticle extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="main-article">
                                <h2 className="main-article-heading">Justo Vulputate Tortor Sem</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed velit est, mollis in maximus quis, mollis non nibh. 
                                    Sed nec orci elit. Nunc nec tincidunt nibh, vel venenatis dui. 
                                    Suspendisse potenti. Phasellus eget venenatis est, elementum malesuada magna. 
                                    Donec ac volutpat ex. Mauris quis pretium mauris, non rutrum nulla. </p>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                    Pellentesque ullamcorper quis leo quis blandit. 
                                    Nunc vitae vulputate nibh. Pellentesque vitae fringilla turpis. 
                                    Sed quis tellus sagittis, blandit justo lobortis, finibus felis. Proin eu tincidunt libero. 
                                    Aenean pellentesque elit quis enim maximus pretium. </p>
                                <p>Morbi viverra, augue in luctus laoreet, justo dui efficitur nisl, id maximus eros augue sed mi. 
                                    Donec interdum purus ac congue consectetur.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed velit est, mollis in maximus quis, mollis non nibh. 
                                    Sed nec orci elit. Nunc nec tincidunt nibh, vel venenatis dui. 
                                    Suspendisse potenti.
                                    <span className="floated">
                                        <p id="quote">
                                            Morbi viverra, augue in luctus laoreet, justo dui efficitur nisl.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                            Pellentesque ullamcorper quis leo quis blandit.
                                        </p>
                                        <cite>- Jane Doe</cite>
                                    </span>
                                        Phasellus eget venenatis est, elementum malesuada magna. 
                                    Donec ac volutpat ex. Mauris quis pretium mauris, non rutrum nulla.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                    Pellentesque ullamcorper quis leo quis blandit. 
                                    Nunc vitae vulputate nibh. Pellentesque vitae fringilla turpis. 
                                    Sed quis tellus sagittis, blandit justo lobortis, finibus felis. Proin eu tincidunt libero. 
                                    Aenean pellentesque elit quis enim maximus pretium.
                                    Ut sit amet ex pellentesque est euismod imperdiet vel ut neque. 
                                    Praesent luctus mollis dictum. Ut mattis, quam et malesuada hendrerit, nisi nisi ornare felis, in ultricies leo eros eu magna.</p>
                            </div>

                            {/* "More in this series" starts */}
                            <div>
                                <h3 className="main-article-subheading"><span>More in this series</span></h3>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="thumbnail"> 
                                            <img src = "./src/img/river.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3>Porta Parturient Fermentum Euismod</h3>
                                        <p>Mauris eleifend leo vitae facilisis imperdiet. Aliquam nibh nisi, sollicitudin et egestas nec, pretium pellentesque elit. 
                                            Ut vitae pharetra justo. Donec aliquam gravida augue a interdum.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="thumbnail"> 
                                            <img src = "./src/img/river.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3>Euismod Fermentum Ornare</h3>
                                        <p>Mauris eleifend leo vitae facilisis imperdiet. Aliquam nibh nisi, sollicitudin et egestas nec, pretium pellentesque elit. 
                                            Ut vitae pharetra justo. Donec aliquam gravida augue a interdum.</p>
                                    </div>
                                </div>
                            </div>
                            {/* "More in this series" ends */}
                        </div>

                        {/* Right side content starts*/}
                        <div className="col-sm-3"> 

                            {/* Submenu starts */}
                            <article className="submenu">
                                <h4>Submenu</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Examples</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About</a></li>
                                </ul>
                            </article>
                            {/* Submenu ends */}

                            {/* Information starts */}
                            <article className="info">
                                <div class="topmost">
                                    <div id="top"><img src = "./src/img/river.jpg" alt="" width="100%"/></div>
                                    <div className="info-content" id="down">
                                        <div id="circle"><img src = "./src/img/dp.jpg" width="100%" height="100%"/></div>
                                        <div className="content">
                                            <p><span className="bold">Name</span><span>Nomen Nescio</span></p>
                                            <p><span className="bold">Email</span><span>nomen@example.com</span></p>
                                            <p><span className="bold">Phone</span><span>+852 555 555</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="message-area">
                                    <div className="content">
                                        <h4>Send me a message</h4>
                                        <p>Subject</p>
                                        <input type="text"/>
                                        <p>Message</p>
                                        <textarea rows="4"></textarea>
                                        <p id="send-button">Send</p>
                                    </div>
                                </div>

                                <div className="map-area">
                                    <div className="content">
                                        <h4>Or meet me at the office</h4>
                                    </div>
                                </div>
                                <span className="embed-responsive embed-responsive-16by9">
                                    <iframe width="100%" height="100%" src="https://www.google.co.in/maps/place/Kisan+Network/@28.507427,77.0810066,17z/data=!3m1!4b1!4m5!3m4!1s0x390d195ccd0f7b31:0x5b61a193eff7c0b!8m2!3d28.5074223!4d77.0832006?hl=en" alt="map"></iframe>
                                </span>

                                <div className="info-content">
                                    <div className="content">
                                        <p>ONE MIDTOWN</p>
                                        <p>11 Hoi Shing Rd</p>
                                        <p>Tsuen Wan</p>
                                    </div>
                                </div>
                            </article>
                            {/* Information ends */}
                        </div>
                        {/* Right side content ends */}
                    </div>
                </div>
            </div>
        );
    }
}