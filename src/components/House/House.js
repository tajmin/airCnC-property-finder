import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './House.css'
import { faCartPlus, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const House = (props) => {
    const { price, thumb, bed, bath, listedBy, address, yearBuilt } = props.house;

    return (
        <div className="card">
            <img className="card-image" src={thumb} alt="" />
            <div className="card-body">
                <h5 className="title">${price.toLocaleString()}</h5>
                <h6 className="secondary-title"><FontAwesomeIcon icon={faMapMarkerAlt} /> {address}</h6>
                <p>{bed} Bed | {bath} Bath</p>
                <p className="card-text"><small>Property listed by {listedBy}</small></p>
                <p>Built on {yearBuilt}</p>
            </div>
            <button onClick={() => props.handleDetails()}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
        </div>
    );
};

export default House;