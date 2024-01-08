import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import Characters from "./characters.js";
import CharacterCard from "../component/characterCard.js";


export const Home = () => {
	const [state, setState] = useState({
		characterId: null,
	});

	// Paso 3 ejecutamos el contexto  y extraemos los estados. SIEMPRE va a ser así
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
	}, []);

	return (
		<div className="container-fluid">
			<div className="row">
				<ul className="list-group-item d-flex flex-row gap-2 overflow-scroll ">
					{store.characters.map(character => (
						<li className="col-4">
						<CharacterCard
							key={character.id}
							name={character.name}
						/>
						</li>
					))}
				</ul >
			</div>
		</div>
	);
}
