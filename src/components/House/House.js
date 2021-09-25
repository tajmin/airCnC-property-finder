import React from 'react';
import './House.css'

const House = (props) => {
    const { price, thumb, bed, bath, listedBy, address, yearBuilt } = props.house;

    return (
        <div className="card">
            <img className="card-image" src={thumb} alt="" />
            <div className="card-body">
                <h5 className="title">${price.toLocaleString()}</h5>
                <h6 className="secondary-title">{address}</h6>
                <p>{bed} Bed | {bath} Bath</p>
                <p className="card-text"><small>Property listed by {listedBy}</small></p>
                <p>Built on {yearBuilt}</p>
            </div>
            {/* <button onClick={() => props.handleDetails(meal)}><FontAwesomeIcon icon={faInfo} /> Details</button> */}
        </div>
    );
};

export default House;