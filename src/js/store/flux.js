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
			agenda:[]
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
					setStore({agenda:data});
				})
				.catch(error => {
					console.error('Error fetching agenda:', error);
				  });
			},
			updateContact: ()=>{}
		}
	};
};

export default getState;
