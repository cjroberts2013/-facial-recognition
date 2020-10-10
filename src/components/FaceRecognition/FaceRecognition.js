import React from "react";

const FaceRecognition = ({ imageURL }) => {
	return (
		<div className="center">
			<img src={imageURL} alt="img" />
		</div>
	);
};

export default FaceRecognition;
