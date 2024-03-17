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
        <div className="container position-relative min-vh-100 pt-5 pb-0 " >
            <div className="card mb-3 mx-md-auto bg-light bg-opacity-75 sizeDetailsCard">
                <div className="row g-0 mb-0  ">
                    <div className="col-md-5">
                        <img className="resize-card-details-img img-fluid h-100" src={`https://starwars-visualguide.com/assets/img/planets/${store.planetDetails.planetId}.jpg`} alt="..." onError={(e) => e.target.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"} />
                    </div>
                    <div className="col-md-7">
                        <div className="bg-dark">
                            <h5 className="card-title fw-bold fs-1 text-center text-light align-self-center mb-0 p-2">{store.planetDetails?.name}</h5>
                        </div>
                        <hr className="mb-4 bg-secondary mt-0" />
                        <div className="row py-3 m-3">
                            {/* <div className="row d-flex flex-row justify-content-center align-items-center"> */}
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Name</h6>
                                <p className="text-center">{store.planetDetails?.name}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="text-wrap fw-bold">Climate</h6>
                                <p className="text-center">{store.planetDetails?.climate}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="text-wrap fw-bold">Population</h6>
                                <p className="text-center">{store.planetDetails?.population}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="text-wrap fw-bold">Orbital Period</h6>
                                <p className="text-center">{store.planetDetails?.orbital_period}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="text-wrap fw-bold">Rotation Period</h6>
                                <p className="text-center">{store.planetDetails?.rotation_period}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="text-wrap fw-bold">Diameter</h6>
                                <p className="text-center">{store.planetDetails?.diameter}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};