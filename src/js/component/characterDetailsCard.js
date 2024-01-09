import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CharacterDetailsCard = props => {
    const [state, setState] = useState({
        //initialize state here
    });

    const { store, actions } = useContext(Context);

    console.log(store.characterDetails);
    const params = useParams();

    return (
        // <div classNameName="card border p-2" style={{ width: "18rem" }}>
        //     <img classNameName="card-img-top" src="..." alt="Cambiar SRC" />
        //     <div classNameName="card-body">
        //         <h5 classNameName="card-title font-weight-bold">{store.characterDetails?.name}</h5>
        //         {/* <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        //     </div>
        //     <ul classNameName="list-group list-group-flush">
        //         <li classNameName="list-group-item">Gender: {props.gender}</li>
        //         <li classNameName="list-group-item">Hair Color: {props.hair_color}</li>
        //         <li classNameName="list-group-item">Eye-color: {props.eye_color}</li>
        //     </ul>
        //     <div classNameName="card-body d-flex justify-content-between">
        //         <button classNameName="border-primary text-primary">
        //             <Link classNameName="btn" to="/single">
        //                 Learn more!
        //             </Link>
        //         </button>
        //         <button classNameName="border-warning">
        //             <i classNameName="fa fa-heart text-warning"></i>
        //         </button>
        //     </div>
        //     <div classNameName="d-flex justify-content-start">...</div>
        // </div>

        <div className="card mb-3 d-flex justify-content-center mx-5" >
            <div className="row g-0">
                <div className="col-md-6">
                    <img src="https://images.wallpaperscraft.com/image/single/beautiful_scenery_mountains_lake_93318_800x600.jpg" className="img-fluid rounded-start img-fluid" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 text-center">{store.characterDetails?.name}</h5>
                        <p className="card-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
                <hr className="my-4 bg-danger fs-1" />
            <div className="col-12 d-flex flex-row justify-content-around text-danger">
                <div>
                    <h6>Name</h6>
                    <p>{store.characterDetails?.name}</p>
                </div>
                <div>
                    <h6 className="text-wrap">Birth
                        Year</h6>
                    <p>{store.characterDetails?.birth_year}</p>
                </div>
                <div>
                    <h6>Gender</h6>
                    <p>{store.characterDetails?.gender}</p>
                </div>
                <div>
                    <h6>Height</h6>
                    <p>{store.characterDetails?.height}</p>
                </div>
                <div>
                    <h6>Skin Color</h6>
                    <p>{store.characterDetails?.skin_color}</p>
                </div>

            </div>
        </div>
    );
};