import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CharacterCard = props => {
    const [state, setState] = useState({
        //initialize state here
    });

    const { store, actions } = useContext(Context);

    const params = useParams();

    return (
        <div className="card border p-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src="..." alt="Cambiar SRC" />
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.name}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Gender: {props.gender}</li>
                <li className="list-group-item">Hair Color: {props.hair_color}</li>
                <li className="list-group-item">Eye-color: {props.eye_color}</li>
            </ul>
            <div className="card-body">
                <button className="border-primary text-primary">
                    <Link className="btn" to="/single">
                        Learn more!
                    </Link>
                </button>
                <button className="border-warning">
                    <i className="fa fa-heart text-warning"></i>
                </button>
            </div>
        </div>
    );
};

export default CharacterCard;