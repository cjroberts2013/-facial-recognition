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
			box: {},
		};
	}

	calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		};
	};

	displayFaceBox = (box) => {
		this.setState({ box: box });
		console.log(box);
	};

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	onSubmit = () => {
		this.setState({ imageURL: this.state.input });
		// app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
		app.models
			.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
			.then((response) =>
				this.displayFaceBox(this.calculateFaceLocation(response))
			)
			.catch((err) => console.log(err));
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
				<FaceRecognition imageURL={this.state.imageURL} box={this.state.box} />
			</div>
		);
	}
}

export default App;
