
import React, { Fragment } from 'react';
import Cabecalho from './Cabecalho';


const Home = () => {

    return (
        <Fragment>
            <Cabecalho />

            <body>

                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>


                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <div src="https://placehold.it/1200x400?text=IMAGE" alt="Image"></div>
                            <div class="carousel-caption"></div>
                        </div>
                    </div>

                    <div class="item">
                        <div src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image">
                            <div class="carousel-caption">
                                <h3>More Sell $</h3>
                                <p>Lorem ipsum...</p>
                            </div>
                        </div>
                    </div>


                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div class="container text-center">
                    <h3>What We Do</h3>
                    <div > {/* antiga quebra de linha */}
                        <div class="row">
                            <div class="col-sm-4">
                                <div src="https://placehold.it/150x80?text=IMAGE" class="div-responsive" style="width:100%" alt="Image">
                                    <p>Current Project</p>
                                </div>
                                <div class="col-sm-4">
                                    <div src="https://placehold.it/150x80?text=IMAGE" class="div-responsive" style="width:100%" alt="Image">
                                        <p>Project 2</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="well">
                                            <p>Some text..</p>
                                        </div>
                                        <div class="well">
                                            <p>Some text..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="container-fluid text-center">
                    <p>Footer Text</p>
                </footer>

            </body>

        </Fragment>
    );


}
export default Home;