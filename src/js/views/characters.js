import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { CharacterCard } from "../component/characterCard.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons'

// queremos usar Card como plantilla para todos los fetch.

export const Characters = props => {
    const [state, setState] = useState({
        //initialize state here
    });

    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState([]);

    return (
        <div className="container-fluid">
            <div className="row">
                <ul className="list-group-item">
                    {store.characters.map((item, index) => (
                        <li key={index}>
                            <CharacterCard />
                        </li>
                    ))}
                </ul >
            </div>
        </div>
    );
};

export default Characters;
