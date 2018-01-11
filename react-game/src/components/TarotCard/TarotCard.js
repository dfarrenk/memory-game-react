import React from "react";
import "./TarotCard.css";

const TarotCard = props => (
    <div className="card" onClick={() => props.clickCard(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
);

export default TarotCard;