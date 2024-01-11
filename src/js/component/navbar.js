
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

export const Navbar = () => {

	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context)

	let favoritesCounter = store.favorites.length;

	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<img className="card-img-top w-25 mx-5" src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" />
				</Link>
				<div className="">
					<Link to="/demo">
						<div className="btn-group align-items-center" role="group">
							<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle mx-3 d-flex flex-row align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
								<div className="d-flex flex-row align-items-center justify-content-between">
									<p className="mx-1">Favorites</p>
									<p className="me-2 bg-danger rounded-circle px-1">{favoritesCounter}</p>
								</div>
							</button>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="btnGroupDrop1">
								{store.favorites.map((item, index) => (
									<div className="d-flex flex-row dropdown-item align-items-center justify-content-between">
										<li key={index} ><a className="align-self-start text-reset text-decoration-none" href="#">{item}</a></li>
										<button key={index} className="btn">
											<i key={index} className="fa fa-heart"></i>
										</button>
									</div>
								))}
							</ul>
						</div>
					</Link>
				</div>

			</nav >
		</div >
	);
};
