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

    // Creados estados para cambiar estilo de los botones al pasar hover.     const [styleFavoriteButton, setStyleFavoriteButton] = useState("text-warning") ${styleFavoriteButton}
    const [styleTextButtonLearnMore, setStyleTextButtonLearnMore] = useState("text-light");
    const [styleFavoriteButton, setstyleFavoriteButton] = useState("btn-outline-dark")
    const [styleHeart, setStyleHeart] = useState("") //estado para cambiar de corazon a estrella
    const [favIsClicked, setfavIsClicked] = useState(false) //estado para detectar si el botón fav esta clicado y que no se cambie el style

    // boton Learn more que cuando haya hover se ponga el texto blanco
    const handleHoverInButton = () => {
        setStyleTextButtonLearnMore("text-secondary");
    }

    // al quitar el hover vuelva al texto en azul
    const handleHoverOutButton = () => {
        setStyleTextButtonLearnMore("text-light");
    };

    // Cuando este el hover en el boton fav se ponga el otro tipo de boton y el corazón cambie a star con texto blanco
    const handleHoverInButtonFav = () => {
        setstyleFavoriteButton("btn-dark");
        setStyleHeart(`fa-star text-warning`) //El corazón no sale el ligth
    }

    const handleHoverOutButtonFav = () => {
        // Si el boton de fav esta clickado se quedará el icono blanco y el fondo amarillo 
        if (!favIsClicked) {
            setstyleFavoriteButton("btn-outline-dark")
            setStyleHeart("") //quitamos la clase fa-star para que no aparezca la estrella y aparezca el corazón
        }
    };

    const handleClickFavButton = () => {
        setfavIsClicked(true);
        setstyleFavoriteButton("btn-dark");
        setStyleHeart(`fa-star text-warning`);
        actions.addToFavorites(props.name, props.id, "characters");
        {/* Le pasamos el nombre id y tipo escrito en "" en este caso characters a la función addToFavorites */ }

    }

    // const resetFavoriteButton = () => {
    //     setfavIsClicked(false);
    //     setstyleFavoriteButton("btn-outline-dark");
    //     setStyleHeart("");
    // };

    // Hacemos el useEffect para que cuando cambie store.favorites se tenga en cuenta si el elemento está incluido,
    // si está incluido se quedarán los estilos del boton clicado, si no se desclicará el botón
    useEffect(() => {
        const isFavorite = store.favorites.includes(props.name)

        if (isFavorite) {
            setstyleFavoriteButton("btn-dark");
            setStyleHeart(`fa-star text-warning`)
        } else {
            setstyleFavoriteButton("btn-outline-dark")
            setStyleHeart("")
            setfavIsClicked(false)
        }
        
    }, [store.favorites]) //Cada vez que cambie store.favorites se ejecutará el useEffect.

    // const params = useParams();

    return (
        <div className="card border bg-secondary bg-opacity-75" style={{ width: "20rem" }}>
            <div className="row">
                <img className="card-img-top img-fluid w-100 resizeImgCharacter" src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} alt="Cambiar SRC" />
                <div className="card-body mx-2">
                    <h5 className="card-title font-weight-bold text-light">{props.name}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-sm m-3 btn-outline-light box-shadow rounded-pill" onMouseEnter={handleHoverInButton} onMouseLeave={handleHoverOutButton}>
                        <Link className={`btn text-secondary ${styleTextButtonLearnMore}`} to={`/characters/${props.id}`}>
                            Learn more!
                        </Link>
                    </button>
                    <button type="button" className={`btn ${styleFavoriteButton} p-3 btn-sm m-3 box-shadow rounded-circle`} onMouseEnter={handleHoverInButtonFav} onMouseLeave={handleHoverOutButtonFav} onClick={handleClickFavButton}>
                        <i className={`fa ${styleHeart} ${favIsClicked ? "fa-star text-warning" : "fa-heart"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;