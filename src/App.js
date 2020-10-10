import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const Clarifai = require("clarifai");

const app = new Clarifai.App({
	apiKey: API_KEY,
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
		};
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	onSubmit = () => {
		console.log("click");
		app.models
			.predict(
				"c0c0ac362b03416da06ab3fa36fb58e3",
				"https://samples.clarifai.com/face-det.jpg"
			)
			.then(
				function (response) {
					//do something
					console.log(response);
				},
				function (err) {
					//there was an error
				}
			);
	};

	render() {
		return (
			<div className="App">
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onSubmit={this.onSubmit}
				/>
				<FaceRecognition />
			</div>
		);
	}
}

export default App;
