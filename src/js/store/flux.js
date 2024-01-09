const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Creamos espacios de memoria para almacenar a los characteres, y los detalles de cada character
			characters: [],
			characterDetails: {}
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
					console.log(response);
					return response.json();
				})
				.then((data) => {
					console.log(data);
					// en Store cambiamos valor characterDetails a lo que queramos acceder, en este caso las propiedades.
					// Utilizamos result? porque es un objeto muy grande y puede darnos error, si ponemos el interrogante antes de la propiedad del objeto a la que quereamos acceder no dará error. Hacemos esto cuando sabemos a ciencia cierta que esa propiedad existe.
					setStore({ characterDetails: data.result?.properties });
				})
				.catch((error) => console.log(error));


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
