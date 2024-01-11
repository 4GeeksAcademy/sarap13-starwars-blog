
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

export const Navbar = () => {

	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context)

	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img className="card-img-top w-25 mx-5" src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" />
				</Link>
				<div className="">
					<Link to="/demo">
						<div className="btn-group" role="group">
							<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle mx-3" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos
							</button>
							<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
								{store.favorites.map((item, index) => (
									<li key={index} ><a className="dropdown-item" href="#">{item}</a></li>
								))}
							</ul>
						</div>
					</Link>
				</div>

			</nav >
		</div >
	);
};
