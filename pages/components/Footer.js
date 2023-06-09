import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>Tech Dev</h3>
                                <p>
                                    Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                                    nada terra videa magna derita valies darta donna mare fermentum
                                    iaculis eu non diam phasellus. Scelerisque felis imperdiet proin
                                    fermentum leo. Amet volutpat consequat mauris nunc congue.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of service</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    Sen Colony <br />
                                    Bani Park, Jaipur,
                                    <br />
                                    Rajasthan 302016 <br />
                                    <strong>Phone:</strong> +91 772897 4971
                                    <br />
                                    <strong>Email:</strong> info@example.com
                                    <br />
                                </p>
                                <div className="social-links">
                                    <a href="#" className="twitter">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="#" className="linkedin">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>
                                    Tamen quem nulla quae legam multos aute sint culpa legam noster
                                    magna veniam enim veniam illum dolore legam minim quorum culpa
                                    amet magna export quem marada parida nodela caramase seza.
                                </p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" defaultValue="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        © Copyright{" "}
                        <strong>
                            <span>Serenity</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer