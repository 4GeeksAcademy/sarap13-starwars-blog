import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CharacterDetailsCard } from "../component/characterDetailsCard.js";

export const Single = () => {
	const { store, actions } = useContext(Context);

	// Creamos un espacio para guardar los params de la ruta creada.
	const params = useParams();
	console.log(params.theid)

	useEffect(() => {
		actions.getCharacterDetails(params.theid)
		// Envias a la función la parte que coge la url dinamica y se lo pasas al flux como parametro.

	}, [])

	return (
		<div className="jumbotron align-items-center">
			{/* <h1 className="display-4">This will show the demo element: {params.theid}</h1> */}
			<CharacterDetailsCard />
			{/* <hr className="my-4" /> */}
			


			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
