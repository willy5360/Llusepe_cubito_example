import { number } from "prop-types";
import React, { useEffect, useState } from "react";

import MyCubito from "./myCubito.jsx";

//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0); // let counter = 0
	const [table, setTable] = useState([]); // let table = []
	const INPUT = document.querySelector("input");

	let myClass = ["appear", "appear2", "appear3"];
	let arr = new Array(counter).fill(""); //creamos un array vacio que tendra el tamaño de counter

	useEffect(() => {
		setTable(
			arr.map((_, index) => {
				return (
					<MyCubito
						animation={
							myClass[Math.floor(Math.random() * myClass.length)] // Devuelve un strin aleatorio, que coincide con la animacion
						}
						key={index.toString()}
					/>
				);
			})
		);
	}, [counter]); //cada vez que counter cambie, vuelve a generarse el codigo que esta dentro del useEffect

	return (
		<>
			<div className="head_container">
				{/* botton que hace que counter suba en 1 */}
				<button onClick={() => setCounter(counter + 1)}>+</button>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setCounter(Number(INPUT.value));
						INPUT.value = "";
					}}>
					<input typeof="number"></input>
				</form>
				{/* boton que hace que counter reste en 1, y si counter es 0, devuelve el mismo valor, o sea 0*/}
				<button
					onClick={() =>
						setCounter(counter == 0 ? counter : counter - 1)
					}>
					-
				</button>
				{/* aqui se dibuja la tabla y se ira cambiando porque counter va creciendo */}
			</div>
			<div className="cubitoContainer">{table}</div>
		</>
	);
};

export default Home;
