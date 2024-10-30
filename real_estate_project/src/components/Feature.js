import React from "react";

export default function Feature() {
   return (
    <div>
        <section className="section feature" aria-labelledby="feature-label">
            <div className="container">
                <figure className="feature-banner">
                    <img 
                        src="images/feature-banner-1.jpg" 
                        width="1020" 
                        height="690" 
                        loading="lazy" 
                        alt="feature banner" 
                        className="img-cover" 
                    />
                </figure>

                <div className="feature-content">
                    <h2 className="headline-medium" id="feature-label">
                        We specialize In Quality Home Renovations
                    </h2>

                    <p className="body-large feature-text">
                        Looking to renovate your home to reflect your style and personality? Look no further than our team of experts who specialize in quality home renovations to transform your space into a dream home you'll love. From design to execution.
                    </p>

                    <ul className="feature-list">
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Smart Home</span>
                        </li>
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Beautiful Scene Around</span>
                        </li>
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Exceptional lifestyle</span>
                        </li>
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Complete 24/7 Security</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="section feature feature-2" aria-labelledby="feature-label-2">
            <div className="container">
                <figure className="feature-banner">
                    <img 
                        src="images/feature-banner-2.jpg" 
                        width="1020" 
                        height="690" 
                        loading="lazy" 
                        alt="feature banner" 
                        className="img-cover" 
                    />
                </figure>

                <div className="feature-content">
                    <h2 className="headline-medium" id="feature-label-2">
                        We Are Experts In Historic Home Renovations
                    </h2>

                    <p className="body-large feature-text">
                        Looking to renovate your home to reflect your style and personality? Look no further than our team of experts who specialize in quality home renovations to transform your space into a dream home you'll love. From design to execution.
                    </p>

                    <ul className="feature-list">
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Smart Home</span>
                        </li>
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Beautiful Scene Around</span>
                        </li>
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Exceptional lifestyle</span>
                        </li>
                        <li className="feature-item">
                            <span className="material-symbols-rounded feature-icon" aria-hidden="true">check_circle</span>
                            <span className="body-medium">Complete 24/7 Security</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
   );
}
