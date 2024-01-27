import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import CharacterCard from "../component/characterCard.js";
import PlanetCard from "../component/planetCard.js";
import VehicleCard from "../component/vehicleCard.js";


export const Home = () => {
	const [state, setState] = useState({
		// Por defecto como no hay ningun id seleccionado, será nulo. En el momento que cliquemos se seleccionara ese.
		characterId: null,
		planetId: null,
	});

	// Paso 3 ejecutamos el contexto  y extraemos los estados. SIEMPRE va a ser así
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
		actions.getVehicles();
	}, []);
	// En el useEffect al recargar la pagina apareceran los characters, planets, etc que queramos que aparezcan en la vista home.

	return (
		<div className="container-fluid">
			<div className="row">
				<h2 className=" mx-4 p-3 neon-shadow">Characters</h2>
				<ul className="d-flex flex-row flex-nowrap overflow-scroll list-unstyled gap-3 px-0 mx-5">
					{store.characters.map(character => (
						<li className="col-4 px-0 w-auto my-2" key={character.uid}>
							<CharacterCard
								id={character.uid}
								name={character.name}
							/>
							{/* Hacemos un map del espacio del store que es characters y ponemos como key la uid (en la respuesta la id sale como uid)
								A Character, como solo queremos que aparezca el nombre y que guarde el ID le pasamos esas propiedades id y name
								Para poder usarlas en CharacterCard */}
						</li>
					))}
				</ul >
			</div>
			<div className="row">
				<h2 className="mx-4 p-3 neon-shadow">Planets</h2>
				<ul className="d-flex flex-row flex-nowrap overflow-scroll list-unstyled gap-3 px-0 mx-5">
					{store.planets.map(planet => (
						<li className="col-4 px-0 w-auto my-2" key={planet.uid}>
							<PlanetCard
								id={planet.uid}
								name={planet.name}
							/>
							{/* Hacemos un map del espacio del store que es characters y ponemos como key la uid (en la respuesta la id sale como uid)
								A Character, como solo queremos que aparezca el nombre y que guarde el ID le pasamos esas propiedades id y name
								Para poder usarlas en CharacterCard */}
						</li>
					))}
				</ul >
			</div>
			<div className="row">
				<h2 className="mx-4 p-3 neon-shadow">Vehicles</h2>
				<ul className="d-flex flex-row flex-nowrap overflow-scroll list-unstyled gap-3 px-0 mx-5">
					{store.vehicles.map(vehicle => (
						<li className="col-4 px-0 w-auto my-2" key={vehicle.uid}>
							<VehicleCard
								id={vehicle.uid}
								name={vehicle.name}
							/>
							{/* Hacemos un map del espacio del store que es characters y ponemos como key la uid (en la respuesta la id sale como uid)
								A Character, como solo queremos que aparezca el nombre y que guarde el ID le pasamos esas propiedades id y name
								Para poder usarlas en CharacterCard */}
						</li>
					))}
				</ul >
			</div>
		</div>
	);
}