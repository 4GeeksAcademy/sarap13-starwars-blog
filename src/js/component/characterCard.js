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

    // console.log(props.id)
    // const params = useParams();

    return (
        <div className="card border p-2" style={{ width: "18rem" }}>
            <div className="row">
                <img className="card-img-top img-fluid w-100 mx-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5nblTqlj3f5khrzV7hcM6YwJ7gGcG2kShQ&usqp=CAU" alt="Cambiar SRC" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.name}</h5>
                    <p className="card-text mb-1">Gender: {props.gender}</p>
                    <p className="card-text mb-1">Hair Color: {props.hair_color}</p>
                    <p className="card-text">Eye-color: {props.eye_color}</p>
                </div>
                <div className="d-flex justify-content-between mt-0">
                    <button type="button" className="btn btn-outline-info btn-sm">
                        <Link className="btn text-info" to={`/single/${props.id}`}>
                            Learn more!
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-warning p-3 btn-sm">
                        <i className="fa fa-heart text-warning"></i>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default CharacterCard;