import React from "react";

export default function Story() {
    return (
        <section className="section story">
            <div className="container">
                <div className="title-wrapper">
                    <div>
                        <p className="section-subtitle title-medium">Our Customers</p>
                        <h2 className="section-title headline-medium">We Help 1000+ Family Find Their True Home</h2>
                        <ul className="avatar-list">
                            <li className="avatar">
                                <img src="images/avatar-1.jpg" width="120" height="80" loading="lazy" alt="John Smith" className="img-cover" />
                            </li>
                            <li className="avatar">
                                <img src="images/avatar-2.jpg" width="120" height="80" loading="lazy" alt="Jane Smith" className="img-cover" />
                            </li>
                            <li className="avatar">
                                <img src="images/avatar-3.jpg" width="120" height="80" loading="lazy" alt="John Smith" className="img-cover" />
                            </li>
                            <li className="avatar">
                                <img src="images/avatar-4.jpg" width="120" height="80" loading="lazy" alt="Jane Smith" className="img-cover" />
                                <div className="overlay-content">
                                    <span className="label-medium">99+</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <a href="#" className="btn btn-outline">
                        <span className="label-medium">View All Stories</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
                    </a>
                </div>

                <ul className="story-list">
                    <li className="story-card" style={{ backgroundImage: "url('images/story-1.jpg')" }}>
                        <a href="#" className="overlay-content">
                            <div>
                                <h3 className="title-small">Chris Traeger</h3>
                                <div className="rating-wrapper">
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <data value="5.0" className="title-small rating-text">5.0</data>
                                </div>
                            </div>
                            <figure className="card-avatar">
                                <img src="images/story-avatar-1.jpg" width="56" height="56" alt="Chris Traeger" className="img-cover" />
                            </figure>
                        </a>
                    </li>

                    <li className="story-card" style={{ backgroundImage: "url('images/story-2.jpg')" }}>
                        <a href="#" className="overlay-content">
                            <div>
                                <h3 className="title-small">Marci Senter</h3>
                                <div className="rating-wrapper">
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <data value="5.0" className="title-small rating-text">5.0</data>
                                </div>
                            </div>
                            <figure className="card-avatar">
                                <img src="images/story-avatar-2.jpg" width="56" height="56" alt="Marci Senter" className="img-cover" />
                            </figure>
                        </a>
                    </li>

                    <li className="story-card" style={{ backgroundImage: "url('images/story-3.jpg')" }}>
                        <a href="#" className="overlay-content">
                            <div>
                                <h3 className="title-small">Duke Silver</h3>
                                <div className="rating-wrapper">
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <data value="5.0" className="title-small rating-text">5.0</data>
                                </div>
                            </div>
                            <figure className="card-avatar">
                                <img src="images/story-avatar-3.jpg" width="56" height="56" alt="Marci Senter" className="img-cover" />
                            </figure>
                        </a>
                    </li>

                    <li className="story-card" style={{ backgroundImage: "url('images/story-4.jpg')" }}>
                        <a href="#" className="overlay-content">
                            <div>
                                <h3 className="title-small">Tsukasa Aoi</h3>
                                <div className="rating-wrapper">
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <data value="5.0" className="title-small rating-text">5.0</data>
                                </div>
                            </div>
                            <figure className="card-avatar">
                                <img src="images/story-avatar-4.jpg" width="56" height="56" alt="Marci Senter" className="img-cover" />
                            </figure>
                        </a>
                    </li>

                    <li className="story-card" style={{ backgroundImage: "url('images/story-5.jpg')" }}>
                        <a href="#" className="overlay-content">
                            <div>
                                <h3 className="title-small">Freida Varnes</h3>
                                <div className="rating-wrapper">
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <data value="5.0" className="title-small rating-text">5.0</data>
                                </div>
                            </div>
                            <figure className="card-avatar">
                                <img src="images/story-avatar-5.jpg" width="56" height="56" alt="Marci Senter" className="img-cover" />
                            </figure>
                        </a>
                    </li>

                    <li className="story-card" style={{ backgroundImage: "url('images/story-6.jpg')" }}>
                        <a href="#" className="overlay-content">
                            <div>
                                <h3 className="title-small">Carl Lorthner</h3>
                                <div className="rating-wrapper">
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">star</span>
                                    <data value="5.0" className="title-small rating-text">5.0</data>
                                </div>
                            </div>
                            <figure className="card-avatar">
                                <img src="images/story-avatar-6.jpg" width="56" height="56" alt="Marci Senter" className="img-cover" />
                            </figure>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
