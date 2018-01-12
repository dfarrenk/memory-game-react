import React from "react";
import "./TarotCard.css";

const TarotCard = props => (
    <div className="tarotCard" onClick={() => props.handleCardClick(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
);

export default TarotCard;