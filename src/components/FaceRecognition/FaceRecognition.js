import React from "react";
import "./FaceRocognition.css";

const FaceRecognition = ({ imageURL, box }) => {
	return (
		<div className="center ma">
			<div className="absolute mv2">
				<img
					id="inputImage"
					src={imageURL}
					alt=""
					width="500px"
					height="auto"
				/>
				<div
					className="bounding-box"
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol,
					}}
				></div>
			</div>
		</div>
	);
};

export default FaceRecognition;
