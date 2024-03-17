import { element } from "prop-types";
import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Creamos espacios de memoria para almacenar a los characteres, y los detalles de cada character
			characters: [],
			characterDetails: {},
			planets: [],
			planetDetails: {},
			vehicles: [],
			vehicleDetails: {},
			favorites: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// En el Store modificamos el valor de character a data.results(la respuesta)
						setStore({ characters: data.results });
					})
					.catch((error) => console.log(error));
			},
			// crear otro fetch para traer los detalles de los characters
			// creamos un param characterId para poder utilizarlo en la función. En single le estamos pasando como params.theid 
			// 		que es la variable url dinamica que cambiara dependiendo del num de id
			getCharacterDetails: (characterId) => {
				fetch(`https://www.swapi.tech/api/people/${characterId}`)
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// en Store cambiamos valor characterDetails a lo que queramos acceder, en este caso las propiedades.
						// Utilizamos result? porque es un objeto muy grande y puede darnos error, si ponemos el interrogante antes de la propiedad del objeto a la que quereamos acceder no dará error. Hacemos esto cuando sabemos a ciencia cierta que esa propiedad existe.
						// creamos una constante para añadirle el id y poder pasarselo a la detaisCard, así podemos en el img poner
						// el id actual para añadir la foto.
						const characterDetailsWithId = {
							...data.result?.properties,
							characterId: characterId
						};
						setStore({ characterDetails: characterDetailsWithId });
					})
					.catch((error) => console.log(error));
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// En el Store modificamos el valor de character a data.results(la respuesta)
						setStore({ planets: data.results });
					})
					.catch((error) => console.log(error));

			},

			getPlanetDetails: (planetId) => {
				fetch(`https://www.swapi.tech/api/planets/${planetId}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						// en Store cambiamos valor characterDetails a lo que queramos acceder, en este caso las propiedades.
						// Utilizamos result? porque es un objeto muy grande y puede darnos error, si ponemos el interrogante antes de la propiedad del objeto a la que quereamos acceder no dará error. Hacemos esto cuando sabemos a ciencia cierta que esa propiedad existe.
						const planetDetailsWithId = {
							...data.result?.properties,
							planetId: planetId
						};
						setStore({ planetDetails: planetDetailsWithId });
					})
					.catch((error) => console.log(error));
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then((response) => {
						// console.log(response);
						return response.json();
					})
					.then((data) => {
						// console.log(data);
						// En el Store modificamos el valor de character a data.results(la respuesta)
						setStore({ vehicles: data.results });
					})
					.catch((error) => console.log(error));

			},

			getVehicleDetails: (vehicleId) => {
				fetch(`https://www.swapi.tech/api/vehicles/${vehicleId}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						console.log(data);
						// en Store cambiamos valor characterDetails a lo que queramos acceder, en este caso las propiedades.
						// Utilizamos result? porque es un objeto muy grande y puede darnos error, si ponemos el interrogante antes de la propiedad del objeto a la que quereamos acceder no dará error. Hacemos esto cuando sabemos a ciencia cierta que esa propiedad existe.

						const vehicleDetailsWithId = {
							...data.result?.properties,
							vehicleId: vehicleId
						};
						setStore({ vehicleDetails: vehicleDetailsWithId });
					})
					.catch((error) => console.log(error));
			},

			addToFavorites: (favoriteName, favoriteId, favoriteType) => {
				// Al clicar al corazón se activará AddToFavorites.
				// Cuando le de al click el name, id y type se añadirá al array favorites. y se dibujará en el navbar
				// Setea el array favorites añadiendole el favoriteName de donde cliqueemos
				// Cambiamos el store el array, añadimos el  al array favorites si esta incluido ya no se añade mas veces.
				// Si el array es 0 añadir el objeto con el nombre, id y tipo que usaremos en el navbar para linkear los elementos
				let favoritesAdded = getStore().favorites.filter((item) => item.name == favoriteName)
				if (favoritesAdded.length === 0) {
					setStore({ favorites: [...getStore().favorites, { name: favoriteName, favoriteId: favoriteId, type: favoriteType }] })
				}
			},

			deleteFromFavorites: (favoriteElementToDelete, favoriteIdToDelete) => {
				// Queremos que cuando le de al icon trash del navbar se elimine de favoritos.
				// Se hace un filter en el favorites del store que coja el indice que crea un array con los elementos que no sean iguales a 
				// favoriteElementToDelete
				setStore({ favorites: getStore().favorites.filter((i, _) => i.name !== favoriteElementToDelete || item.favoriteId !== favoriteIdToDelete) }
					// Queremos que cuando eliminemos el elemento de fav el botón de la card se desclique 
				);
				// resetFavoriteButton()

			}
		},

		loadSomeData: () => {
			/**
				fetch().then().then(data => setStore({ "foo": data.bar }))
			*/
		},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		}
	}
};

export default getState;
