import React from "react";

export default function App(props) {
    return (
        <div className="card">
            <div className="card-banner">
                <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src={`images/${props.url}`} width="585" height="390" alt={props.imageName} className="img-cover" />
                </figure>

                <span className="badge label-medium">New</span>

                <button className="icon-btn fav-btn" aria-label="add to favorite" data-toggle-btn>
                    <span className="material-symbols-rounded" aria-hidden="true">favorite</span>
                </button>
            </div>

            <div className="card-content">
                <span className="title-large">{props.price}</span>

                <h3>
                    <a href="#" className="title-small card-title">{props.imageName}</a>
                </h3>

                <address className="body-medium card-text">
                    {props.address}
                </address>

                <div className="card-meta-list">
                    <div className="meta-item">
                        <span className="material-symbols-rounded meta-icon" aria-hidden="true">bed</span>
                        <span className="meta-text label-medium">{props.bed} Bed</span>
                    </div>
                    <div className="meta-item">
                        <span className="material-symbols-rounded meta-icon" aria-hidden="true">bathtub</span>
                        <span className="meta-text label-medium">{props.bath} Bath</span>
                    </div>
                    <div className="meta-item">
                        <span className="material-symbols-rounded meta-icon" aria-hidden="true">straighten</span>
                        <span className="meta-text label-medium">{props.sqft} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
