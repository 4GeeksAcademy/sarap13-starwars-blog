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
        <div className="card mb-3 d-flex justify-content-center mx-5" >
            <div className="row g-0">
                <div className="col-md-6">
                    <img src="https://images.wallpaperscraft.com/image/single/beautiful_scenery_mountains_lake_93318_800x600.jpg" className="img-fluid rounded-start img-fluid" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 text-center">{store.planetDetails?.name}</h5>
                        <p className="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <hr className="my-4 bg-danger fs-1" />
            <div className="col-12 d-flex flex-row justify-content-around text-danger">
                <div>
                    <h6>Name</h6>
                    <p>{store.planetDetails?.name}</p>
                </div>
                <div>
                    <h6 className="text-wrap">Climate</h6>
                    <p>{store.planetDetails?.climate}</p>
                </div>
                <div>
                    <h6>Population</h6>
                    <p>{store.planetDetails?.population}</p>
                </div>
                <div>
                    <h6>Orbital Period</h6>
                    <p>{store.planetDetails?.orbital_period}</p>
                </div>
                <div>
                    <h6>Rotation Period</h6>
                    <p>{store.planetDetails?.rotation_period}</p>
                </div>
                <div>
                    <h6>Diameter</h6>
                    <p>{store.planetDetails?.diameter}</p>
                </div>

            </div>
        </div>
    );
};