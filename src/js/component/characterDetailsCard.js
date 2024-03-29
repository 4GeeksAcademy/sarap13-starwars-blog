import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CharacterDetailsCard = props => {
    const [state, setState] = useState({
        //initialize state here
    });

    const { store, actions } = useContext(Context);

    // console.log(store.characterDetails);
    const params = useParams();

    return (
        <div className="container position-relative min-vh-100 pb-5">
            <div className="card mx-auto bg-light bg-opacity-75 mb-5 sizeDetailsCard">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="resize-card-details-character-img img-fluid" src={`https://starwars-visualguide.com/assets/img/characters/${store.characterDetails.characterId}.jpg`} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="bg-dark">
                            <h5 className="card-title fw-bold fs-1 text-center text-light align-self-center mb-0 p-2">{store.characterDetails?.name}</h5>
                        </div>
                        <hr className="mb-4 bg-secondary mt-0" />
                        <div className="row py-3 m-3">
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Name</h6>
                                <p className="text-center">{store.characterDetails?.name}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Birth Year</h6>
                                <p>{store.characterDetails?.birth_year}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Gender</h6>
                                <p>{store.characterDetails?.gender}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Height</h6>
                                <p>{store.characterDetails?.height}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Skin Color</h6>
                                <p>{store.characterDetails?.skin_color}</p>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-center mt-2">
                                <h6 className="fw-bold">Eye Color</h6>
                                <p>{store.characterDetails?.eye_color}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};