import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src="./assets/images/logo.png" width="190" height="28" alt="Wealthhome" />
                        </a>

                        <p className="body-medium footer-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente omnis laborum maxime sit atque?
                        </p>
                    </div>

                    <nav className="footer-nav" aria-labelledby="nav-label-1">
                        <p className="title-small footer-list-title" id="nav-label-1">Quick Link</p>

                        <ul className="footer-list">
                            <li>
                                <a href="#" className="body-medium footer-link">Home</a>
                            </li>
                            <li>
                                <a href="#" className="body-medium footer-link">Buy</a>
                            </li>
                            <li>
                                <a href="#" className="body-medium footer-link">Sell</a>
                            </li>
                            <li>
                                <a href="#" className="body-medium footer-link">Rent</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className="footer-nav" aria-labelledby="nav-label-2">
                        <p className="title-small footer-list-title" id="nav-label-2">Support</p>

                        <ul className="footer-list">
                            <li>
                                <a href="#" className="body-medium footer-link">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="body-medium footer-link">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="body-medium footer-link">Privacy & Policy</a>
                            </li>
                            <li>
                                <a href="#" className="body-medium footer-link">Terms & Conditions</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className="footer-nav" aria-labelledby="nav-label-3">
                        <p className="title-small footer-list-title" id="nav-label-3">Get in touch</p>

                        <ul className="footer-list">
                            <li>
                                <a href="mailto:hello@wealthhome.com" className="body-medium footer-link">hello@wealthhome.com</a>
                            </li>
                            <li>
                                <address className="body-medium footer-link">4140 Parker Rd. Allentown, New Mexico 31134</address>
                            </li>
                            <li>
                                <ul className="social-list">
                                    <li><a href="#" className="social-link"><img src="./assets/images/facebook.svg" alt="facebook" /></a></li>
                                    <li><a href="#" className="social-link"><img src="./assets/images/twitter.svg" alt="twitter" /></a></li>
                                    <li><a href="#" className="social-link"><img src="./assets/images/insta.svg" alt="instagram" /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright body-medium">
                        Copyright 2023 codewithsadee
                    </p>
                </div>
            </div>
        </footer>
    )
}
