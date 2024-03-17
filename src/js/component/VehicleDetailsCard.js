import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const VehicleDetailsCard = props => {
    const [state, setState] = useState({
        //initialize state here
    });

    const { store, actions } = useContext(Context);

    console.log(store.vehicleDetails);
    const params = useParams();

    return (
        <div className="container position-relative pb-5">
            <div className="card mx-auto bg-light bg-opacity-75 mb-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehicleDetails.vehicleId}.jpg`} className="resize-card-details-vehicle-img img-fluid h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="bg-dark">
                            <h5 className="card-title fw-bold fs-1 text-center text-light align-self-center mb-0 p-2">{store.vehicleDetails?.name}</h5>
                        </div>
                        <hr className="mb-4 bg-secondary mt-0" />
                        <div className="row py-3 m-3">
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Name</h6>
                                <p className="text-center">{store.vehicleDetails?.name}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Model</h6>
                                <p className="text-center">{store.vehicleDetails?.model}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Vehicle Class</h6>
                                <p className="text-center">{store.vehicleDetails?.vehicle_class}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Manufacturer</h6>
                                <p className="text-center">{store.vehicleDetails?.manufacturer}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Crew</h6>
                                <p className="text-center">{store.vehicleDetails?.crew}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Consumables</h6>
                                <p className="text-center">{store.vehicleDetails?.consumables}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};