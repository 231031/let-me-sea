import React, { useState, useEffect } from "react";
import coverImage from './image/coverImg.png';
import './BoxOf.css';

function Spotify() {
    const [visible, setVisible] = useState(true);

    const removeElement = () => {
    setVisible((prev) => !prev); };

  return (
    <div className="containBox">
      {visible && (
        <div className="cover">
            <img src={coverImage} alt=""/>
            <button className="btn_remove" onClick={removeElement}>Remove</button>
        </div>
      )}
    </div>
  );
}
export default Spotify;