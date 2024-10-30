import React from "react";
import Card from "./Card";
import CardData from "../CardData";

export default function Property() {
    const card = CardData.map(i => {
        return (
          <Card 
            key={i.id}
            url={i.url}
            imageName={i.imageName}
            price={i.price}
            address={i.address}
            bed={i.bed}
            bath={i.bath}
            sqft={i.sqft}
            />
        )
      })

    return (
        <section className="section property" aria-labelledby="property-label">
            <div className="container">
                <div className="title-wrapper">
                    <div>
                        <h2 className="section-title headline-small">Best home in your city</h2>
                        <p className="section-text body-large">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eveniet mollitia ipsam eligendi aliquam, qui pariatur in doloribus accusantium quo.
                        </p>
                    </div>

                    <a href="#" className="btn btn-outline">
                        <span className="label-medium">Explore more</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
                    </a>
                </div>

                <div className="property-list">
                    {card}
                </div>
            </div>
        </section>
    );
}
