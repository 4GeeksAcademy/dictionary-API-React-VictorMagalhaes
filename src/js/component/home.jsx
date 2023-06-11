import React from "react";

import Dictionary from "./dictionary.jsx";

import Footer from "./footer.jsx";
//create your first component


const Home = () => {


	return (
		<div className="container">
			<h1>
				<Dictionary/>
				<Footer/>
			</h1>
		</div>
	);
};

export default Home;
