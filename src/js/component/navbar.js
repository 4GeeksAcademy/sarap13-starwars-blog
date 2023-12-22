import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="card-img-top w-25 mx-5" src="https://visualpharm.com/assets/195/Star%20Wars-595b40b85ba036ed117de471.svg" />
			</Link>
			<div className="ml-auto dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<Link to="/demo">
					<button className="btn btn-primary dropdown-toggle fs-4 mx-5">Favorites</button>
				</Link>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    			{/* <Link to="/" class="dropdown-item">Action</a> */}
    			<a className="dropdown-item" href="#">Something else here</a>
 				</div>
			</div>
		</nav>
	);
};
