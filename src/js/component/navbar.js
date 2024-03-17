
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";

export const Navbar = ({ favorites }) => {

	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context)

	// Variable creada para que aparezca el numero de favoritos al lado de Favorites en el boton dropdown. Se le pasa el valor en el return.
	let favoritesCounter = store.favorites.length;

	return (
		<div className="container-fluid p-0 mt-3">
			<nav className="navbar mb-5 ">
				<div className="d-flex flex-row align-items-between">
					<Link className="w-5" to="/">
						<img className="card-img-top mx-4 img-fluid logo-small d-none d-md-block" src="https://assets.stickpng.com/images/602176580ad3230004b93c22.png" style={{ width: "15%"}}/>
						<img className="card-img-top mx-4 img-fluid logo-large d-md-none" src="https://assets.stickpng.com/images/602176580ad3230004b93c22.png" />
					</Link>
					<div className="mx-4 d-flex align-items-center">
						<Link to="/demo">
							<div className="btn-group align-items-center" role="group">
								<button id="btnGroupDrop1" type="button" className="btn btn-light rounded-pill dropdown-toggle mx-3 d-flex flex-row align-items-center box-shadow" data-bs-toggle="dropdown" aria-expanded="false">
									<div className="d-flex flex-row align-items-center justify-content-between">
										<p className="mx-1 mb-0 fs-5">FAVORITES</p>
										<p className=" bg-dark rounded-circle px-1 mb-0 text-light">{favoritesCounter}</p>
									</div>
								</button>
								<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="btnGroupDrop1">
									{store.favorites.length > 0 && store.favorites.map((item, index) => (
										// <div  className="  ">
										<li key={index}> <Link to={`${item.type}/${item.favoriteId}`}>
											<p className="text-reset text-decoration-none align-self-center mb-0">{item.name}</p></Link>
											<button className="btn" onClick={(event) => { event.preventDefault(); actions.deleteFromFavorites(item.name); }}>
												<i className="fa fa-trash"></i>
											</button>
										</li>
										// /* // </div> */ }
									))}
								</ul>
							</div>
						</Link>
					</div>
				</div>

			</nav >
		</div >
	);
};
