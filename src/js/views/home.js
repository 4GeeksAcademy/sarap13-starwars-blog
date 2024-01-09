import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import Characters from "./characters.js";
import CharacterCard from "../component/characterCard.js";


export const Home = () => {
	const [state, setState] = useState({
		// Por defecto como no hay ningun id seleccionado, será nulo. En el momento que cliquemos se seleccionara ese.
		characterId: null,
	});

	// Paso 3 ejecutamos el contexto  y extraemos los estados. SIEMPRE va a ser así
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
	}, []);
	// En el useEffect al recargar la pagina apareceran los characters, planets, etc que queramos que aparezcan en la vista home.

	return (
		<div className="container-fluid">
			<div className="row">
				<h2 className="text-danger mx-4">Characters</h2>
				<ul className="list-group-item d-flex flex-row overflow-scroll list-unstyled gap-5">
					{store.characters.map(character => (
						<li className="col-5 m-2" key={character.uid}>
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
		</div>
	);
}