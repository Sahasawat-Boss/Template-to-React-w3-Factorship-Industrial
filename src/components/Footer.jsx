import React from 'react'

const Footer = () => {
    return (
        <div>
            {/*---- /footer-9 ----*/}
            <footer className="w3l-footer9">
                <section className="footer-inner-main py-5">
                    <div className="container py-md-3">
                        <div className="right-side">
                            <div className="row footer-hny-grids sub-columns">
                                <div className="col-lg-3 sub-one-left">
                                    <h6>About </h6>
                                    <p className="footer-phny pe-lg-5">Since 1960,. has built a reputation for producing high quality precision fabricated products for use in a variety of industries.</p>
                                    <div className="columns-2 mt-lg-5 mt-4">
                                        <ul className="social">
                                            <li><a href="#facebook"><span className="fab fa-facebook-f"></span></a>
                                            </li>
                                            <li><a href="#linkedin"><span className="fab fa-linkedin-in"></span></a>
                                            </li>
                                            <li><a href="#twitter"><span className="fab fa-twitter"></span></a>
                                            </li>
                                            <li><a href="#google"><span className="fab fa-google-plus-g"></span></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 sub-two-right">
                                    <h6>Services</h6>
                                    <ul>
                                        <li><a href="#processing"><i className="fas fa-angle-right"></i> Agriculture Processing</a>
                                        </li>
                                        <li><a href="#research"><i className="fas fa-angle-right"></i> Chemical Research</a>
                                        </li>
                                        <li><a href="#metal"><i className="fas fa-angle-right"></i> Metal Engineering</a>
                                        </li>
                                        <li><a href="#gas"><i className="fas fa-angle-right"></i> Petroleum & Gas</a>
                                        </li>
                                        <li><a href="#work"><i className="fas fa-angle-right"></i> Mechanical Engineering</a></li>


                                    </ul>
                                </div>
                                <div className="col-lg-3 sub-two-right">
                                    <h6>Our Links</h6>
                                    <ul>

                                        <li><a href="#why"><i className="fas fa-angle-right"></i> Why us</a>
                                        </li>
                                        <li><a href="#licence"><i className="fas fa-angle-right"></i> Licensing
                                        </a>
                                        </li>
                                        <li><a href="#log"><i className="fas fa-angle-right"></i> Offers
                                        </a></li>
                                        <li><a href="#log"><i className="fas fa-angle-right"></i> Changelog
                                        </a></li>
                                        <li><a href="#career"><i className="fas fa-angle-right"></i> Careers</a></li>

                                    </ul>
                                </div>
                                <div className="col-lg-3 sub-one-left">
                                    <h6>Recent Posts </h6>
                                    <div className="row fposts-grid-inner mb-4">
                                        <div className="col-4 fposts-grid-left ps-0">
                                            <a href="blog-single.html">
                                                <img src="/src/assets/images/g2.jpg" alt="test " className="img-fluid radius-image" />
                                            </a>
                                        </div>
                                        <div className="col-8 fposts-grid-right">
                                            <h4>
                                                <a href="#home" className="text-bl text-left">Lorem ipsum viverra feugiat libero.</a>
                                            </h4>
                                            <p className="time"> 11 Minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="row fposts-grid-inner mb-4">
                                        <div className="col-4 fposts-grid-left ps-0">
                                            <a href="blog-single.html">
                                                <img src="/src/assets/images/g3.jpg" alt=" " className="img-fluid radius-image" />
                                            </a>
                                        </div>
                                        <div className="col-8 fposts-grid-right">
                                            <h4>
                                                <a href="#home" className="text-bl text-left">Lorem ipsum viverra feugiat libero.</a>
                                            </h4>
                                            <p className="time"> 11 Minutes ago</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="below-section mt-5">
                            <div className="copyright-footer">
                                <div className="columns text-left">
                                    <p>© 2021 Factorship. All rights reserved.All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank">
                                        W3Layouts</a></p>
                                </div>
                                <ul className="footer-w3list text-right">
                                    <li><a href="#url">Privacy Policy</a>
                                    </li>
                                    <li><a href="#url">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Must use react hook and logic */}
                {/*---- Js scripts ----*/}
                {/*---- move top 
                <button onclick="topFunction()" id="movetop" title="Go to top">
                    <span class="fas fa-level-up-alt" aria-hidden="true"></span>
                </button>
                <script>
            // When the user scrolls down 20px from the top of the document, show the button
                    window.onscroll = function() {
                        scrollFunction()
                    };

                    function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                        document.getElementById("movetop").style.display = "block";
                } else {
                        document.getElementById("movetop").style.display = "none";
                }
            }

                    // When the user clicks on the button, scroll to the top of the document
                    function topFunction() {
                        document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
            }

                </script> 
                ----*/}
            </footer>
            {/*---- //footer-9  ----*/}
        </div>
    )
}

export default Footer