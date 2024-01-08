// import React, { useState, useEffect, useContext } from "react";
// import { withRouter } from "react-router-dom";
// import { Context } from "../store/appContext.js";
// import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHeart } from '@fortawesome/free-regular-svg-icons'

// // queremos usar Card como plantilla para todos los fetch.

// export const Card = props => {
//     const [state, setState] = useState({
//         //initialize state here
//     });

//     const { store, actions } = useContext(Context);


//     return (
//         <li className="list-group-item">
//             <div className="card border" style={{ width: "18rem" }}>
//                 <img className="card-img-top" src="..." alt="Cambiar SRC" />
//                 <div className="card-body">
//                     <h5 className="card-title font-weight-bold">{props.name}</h5>
//                     {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Gender: {props.gender}</li>
//                     <li className="list-group-item">Hair Color: {props.hair_color}</li>
//                     <li className="list-group-item">Eye-color: {props.eye_color}</li>
//                 </ul>
//                 <div className="card-body">
//                     <button className="btn">Learn more!</button>
//                     <button className="">
//                         <i className="">
//                             {/* <FontAwesomeIcon icon="fa-heart" /> */}
//                         </i>
//                     </button>

//                     {/* <a href="#" className="card-link">Card link</a> */}
//                     {/* <a href="#" className="card-link">Another link</a> */}
//                 </div>
//             </div>
//         </li >
//     );
// };