import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const PlanetDetailsCard = props => {
    const [state, setState] = useState({
        //initialize state here
    });

    const { store, actions } = useContext(Context);

    console.log(store.planetDetails);
    const params = useParams();

    return (
        <div className="card mb-3 d-flex justify-content-center mx-5 bg-light bg-opacity-75 w-75 align-self-center" >
            <div className="row g-0 mb-0">
                {/* <div className="col-md-6"> */}
                <img className="py-0 resize-card-details-img" src={`https://starwars-visualguide.com/assets/img/planets/${store.planetDetails.planetId}.jpg`} alt="..." />
                {/* </div> */}
                <div className="bg-dark">
                    <h5 className="card-title fw-bold fs-1 text-center text-light align-self-center mb-0">{store.planetDetails?.name}</h5>
                </div>
            </div>
            <hr className="mb-4 bg-secondary mt-0" />
            <div className="row d-flex flex-row justify-content-center align-items-center">
                <div className="col-6 d-flex flex-column align-items-center">
                    <h6 className="fw-bold">Name</h6>
                    <p className="text-center">{store.planetDetails?.name}</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <h6 className="text-wrap fw-bold">Climate</h6>
                    <p className="text-center">{store.planetDetails?.climate}</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <h6 className="text-wrap fw-bold">Population</h6>
                    <p className="text-center">{store.planetDetails?.population}</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <h6 className="text-wrap fw-bold">Orbital Period</h6>
                    <p className="text-center">{store.planetDetails?.orbital_period}</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <h6 className="text-wrap fw-bold">Rotation Period</h6>
                    <p className="text-center">{store.planetDetails?.rotation_period}</p>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <h6 className="text-wrap fw-bold">Diameter</h6>
                    <p className="text-center">{store.planetDetails?.diameter}</p>
                </div>
            </div>
        </div>
    );
};