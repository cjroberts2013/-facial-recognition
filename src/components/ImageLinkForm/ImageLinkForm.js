import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div className="">
			<p className="f3">
				{"This app will detect faces in your pictures. Give it a try!"}
			</p>
			<div className="center">
				<div className="pa4 br3 shadow-3 center form">
					<input
						className="f4 w-70 center pa2"
						type="text"
						onChange={onInputChange}
					/>
					<button
						className="w-30 grow f4 link ph3 pv2 dib white bg-light-green"
						onClick={onSubmit}
					>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
