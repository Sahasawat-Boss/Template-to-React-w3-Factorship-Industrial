import React from 'react'

const Home = () => {
    return (
        <div>

            {/*---- /Banner-Start ----*/}
            {/*----  main-slider  ----*/}
            <section className="w3l-main-slider banner-slider" id="home">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <div className="slider-info banner-view banner-top1">
                            <div className="container">
                                <div className="banner-info header-hero-19">
                                    <p className="w3hny-tag">Quality With Integrity</p>
                                    <h3 className="title-hero-19">The facility of applied intelligence.</h3>
                                    <p className="w3ban-para">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo. <span className="w3-xtrap">Ultrices in ligula,semper at tempufddfel.</span> </p>
                                    <a href="about.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Read More <i className="fas fa-angle-double-right ms-2"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w3l-stats-section stats-con mt-5">
                    <div className="stats_info counter_grid ps-0">
                        <p className="counter">3500 </p>
                        <h3>Factories</h3>
                    </div>
                    <div className="stats_info counter_grid">
                        <p className="counter">4360</p>
                        <h3>Projects</h3>
                    </div>

                </div>

            </section>

            {/*----  //main-slider  ----*/}
            {/*---- /grids ----*/}
            <section className="w3l-grids-3 py-5" id="about">
                <div className="container py-md-5 py-3">
                    <div className="bottom-ab-grids align-items-center">
                        <div className="w3ab-left-top">
                            <h6 className="title-subw3hny mb-1">Our Info</h6>
                            <h3 className="title-w3l mb-2">We are not your regular design agency we take the time to go further</h3>
                            <p className="my-3 mb-5 px-lg-5"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Nulla mollis dapibus nunc, ut rhoncus
                                turpis sodales quis. Integer sit amet mattis quam.</p>

                            {/*----  /home-page-video-popup ----*/}
                            <div className="w3l-index5 mt-3" id="video">
                                <div className="position-relative">
                                    <a href="#small-dialog" className="popup-with-zoom-anim play-view text-center position-absolute">
                                        <span className="video-play-icon">
                                            <span className="fa fa-play"></span>
                                        </span>
                                    </a>
                                    {/*----  dialog itself, mfp-hide class is required to make dialog hidden  ----*/}
                                    <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                        <iframe src="https://player.vimeo.com/video/13618190" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                    </div>
                                </div>
                                {/*----  //home-page-video-popup ----*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*---- //grids ----*/}

            {/*---- /w3-grids ----*/}
            <section className="w3l-passion-mid-sec home-phny py-5">
                <div className="container py-md-5 py-3">
                    <div className="container">
                        <div className="row w3l-passion-mid-grids">
                            <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-5">
                                <h6 className="title-subw3hny mb-1">Welcome</h6>
                                <h3 className="title-w3l mb-4">We Help Build On Past & Prepare
                                    For Your Future.</h3>
                                <p className="mt-3 pe-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
                                    ligula. Semper at tempufddfel.Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia
                                    cum ex ipsam autem!earum sequi amet.</p>

                            </div>
                            <div className="col-lg-6 w3hny-passion-item">
                                <div className="row">
                                    <div className="col-6 passion-grid-item-pic">
                                        <img src="assets/images/ab1.jpg" alt="" className="img-fluid radius-image"/>
                                    </div>
                                    <div className="col-6 passion-grid-item-pic">
                                        <img src="assets/images/ab2.jpg" alt="" className="img-fluid radius-image"/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Home