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

    // Creados estados para cambiar estilo de los botones al pasar hover.
    const [styleTextButtonLearnMore, setStyleTextButtonLearnMore] = useState("text-info");
    const [styleFavoriteButton, setStyleFavoriteButton] = useState("text-warning")
    const [styleHeart, setStyleHeart] = useState("")

    // boton Learn more que cuando haya hover se ponga el texto blanco
    const handleHoverInButton = () => {
        setStyleTextButtonLearnMore("text-white");
    }

    // al quitar el hover vuelva al texto en azul
    const handleHoverOutButton = () => {
        setStyleTextButtonLearnMore("text-info");
    };


    const handleHoverInButtonFav = () => {
        setStyleFavoriteButton("text-white");
        setStyleHeart("fa-regular") //no funciona!
    }


    const handleHoverOutButtonFav = () => {
        setStyleFavoriteButton("text-warning");
    };


    // console.log(props.id)
    // const params = useParams();

    return (
        <div className="card border" style={{ width: "20rem" }}>
            <div className="row">
                <img className="card-img-top img-fluid w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5nblTqlj3f5khrzV7hcM6YwJ7gGcG2kShQ&usqp=CAU" alt="Cambiar SRC" />
                <div className="card-body mx-2">
                    <h5 className="card-title font-weight-bold">{props.name}</h5>
                    <p className="card-text mb-1">Gender: {props.gender}</p>
                    <p className="card-text mb-1">Hair Color: {props.hair_color}</p>
                    <p className="card-text">Eye-color: {props.eye_color}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm btn-outline-info m-3" onMouseEnter={handleHoverInButton} onMouseLeave={handleHoverOutButton}>
                        <Link className={`btn text-info ${styleTextButtonLearnMore}`} to={`/characters/${props.id}`}>
                            Learn more!
                        </Link>
                    </button>
                    <button type="button" className="btn btn-outline-warning p-3 btn-sm m-3" onMouseEnter={handleHoverInButtonFav} onMouseLeave={handleHoverOutButtonFav}>
                        <i className={`fa fa-heart text-warning ${styleFavoriteButton} ${styleHeart}`}></i>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default CharacterCard;