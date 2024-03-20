import React, { useRef, useState } from "react";
import Webcam from "react-webcam"; // Import the Webcam component
import "./index.scss"; // Import SCSS file for styling

const CameraComponent = ({ size, isCameraOpen, setIsCameraOpen }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
    setCapturedImage(null); // Reset captured image when closing the camera
  };

  return (
    <div className="overall">
      <div className="camera-container">
        {/* Render the Webcam component if the camera is open */}
        {isCameraOpen && (
          <div className="webcam-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              className="webcam-element"
              screenshotFormat="image/jpeg"
            />
            <button onClick={captureImage} className="capture-button">
              Capture Image
            </button>
          </div>
        )}
      </div>

      <div className="captured-container">
      {capturedImage && (
        <div className="captured-image-container">
          <img
            src={capturedImage}
            alt="Captured"
            className="captured-image-element"
          />

          <button onClick={closeCamera} className="close-button">
            Close Camera
          </button>
        </div>
      )}

      </div>
      
    </div>
  );
};

export default CameraComponent;
