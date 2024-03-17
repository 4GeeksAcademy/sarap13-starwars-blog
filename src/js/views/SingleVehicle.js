import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { VehicleDetailsCard } from "../component/VehicleDetailsCard.js";

export const SingleVehicle = () => {
	const { store, actions } = useContext(Context);

	// Creamos un espacio para guardar los params de la ruta creada.
	const params = useParams();
	// console.log(params.theid)

	useEffect(() => {
		actions.getVehicleDetails(params.theid)
		// Envias a la función la parte que coge la url dinamica y se lo pasas al flux como parametro.

	}, [])

	return (
		<div className="jumbotron align-items-center min-vh-100">
			<VehicleDetailsCard />
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};

export default SingleVehicle;