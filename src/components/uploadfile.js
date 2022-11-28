import React, { useState } from "react";
import icon_up1 from './image/icon_up1.png';

/*
const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    return (
      <div className="uploadFile">
        {selectedImage && (
          <div className="uploadBG">
            <img alt="not fount" src={URL.createObjectURL(selectedImage)} />
          </div>
        )}
        <input type="file" id="upload" name="myImage"
            onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
        <label for="upload"><img src={icon_up1} className="upload_icon"/></label>
      </div>
    );
  };

  
  export default UploadAndDisplayImage;*/

/*
 function ChangeBackground(){
    constructor(); {
        super();
        this.state = {
            backgroundImage: 'START'
        }

        this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    }

    handleBackgroundChange(); {
        const reader = new FileReader();
        const file = e.target.files[0];

        this.setState({
          backgroundImage: file.name,
        });
    }
        return (
            <div className="change-bg-wrap">
                <input id="upload" onChange={this.handleBackgroundChange} type="file" accept="image/*" />
                file: {this.state.backgroundImage}
                <label for="upload"><img src={icon_up1} className="upload_icon"/></label>
            </div>
        )
}

export default ChangeBackground; */