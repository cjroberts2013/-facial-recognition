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
			imageURL: "",
		};
	}

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onSubmit = () => {
		this.setState({ imageURL: this.state.input });
		app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
			// app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
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
				<FaceRecognition imageURL={this.state.imageURL} />
			</div>
		);
	}
}

export default App;
