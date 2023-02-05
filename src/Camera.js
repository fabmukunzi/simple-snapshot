import React from "react";
import Webcam from "react-webcam";
import "./App.css";

class Camera extends React.Component {
  webcamRef = React.createRef();

  state = {
    imageSrc: null
  };

  capture = () => {
    const imageSrc = this.webcamRef.current.getScreenshot();
    this.setState({ imageSrc });
  };

  render() {
    const { imageSrc } = this.state;

    return (
      <>
        <div className="camera-container">
          <Webcam
            className="webcam-preview"
            audio={false}
            mirrored={true}
            ref={this.webcamRef}
          />
          <button className="capture-button" onClick={this.capture}>
            Capture
          </button>
        </div>
        {imageSrc && (
          <div className="preview-container">
            <h2>Preview:</h2>
            <img className="preview-image" src={imageSrc} alt="Captured" />
          </div>
        )}
      </>
    );
  }
}

export default Camera;
