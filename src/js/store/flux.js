const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda: [],
			contacto: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
			},
			getAgenda: () => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda'
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ agenda: data });
					})
					.catch(error => {
						console.error('Error fetching agenda:', error);
					});
			},
			createContact: async (Name, Email, Address, Phone) => {
				try {
					const store = getStore();

					const newContacto = {
						full_name: Name,
						email: Email,
						agenda_slug: 'my_super_agenda',
						address: Address,
						phone: Phone,
					};

					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
						method: "POST",
						body: JSON.stringify(newContacto),
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						console.log("Contacto creado exitosamente");
					} else {
						console.error("Error al crear el contacto:", response.status);
					}
				} catch (error) {
					console.error("Error en la solicitud:", error);
				}
			},

			updateContact: (Name, Email, Address, Phone, id) => {

				const editContact = {
					full_name: Name,
					email: Email,
					agenda_slug: 'my_super_agenda',
					address: Address,
					phone: Phone,
				};

				try {
					const response = fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(editContact)
					});

					if (response.ok) {
						console.log("Contacto editado exitosamente");
					} else {
						console.error("Error al editar el contacto:", response.status);
					}
				} catch (error) {
					console.error("Error en la solicitud:", error);
				}
				actions.getAgenda()
			},


			/* getContact: (id) => {

				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({contacto : data});
						console.log(data)
					})
					.catch(error => {
						console.error('Error fetching agenda:', error);
					});
			}, */
			getContact: (index) => {
				const store = getStore(); // Accede al estado global directamente
				
			    
				setStore({contacto : store.agenda[index]})
				console.log(store.contacto)
			  
			  },





			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});

					if (response.ok) {
						console.log("Contacto eliminado exitosamente");
					} else {
						console.error("Error al eliminar el contacto:", response.status);
					}
				} catch (error) {
					console.error("Error en la solicitud:", error);
				}
				actions.getAgenda()
			}

		}
	}
};


export default getState;
