import React from 'react';
import preloader from "../../Images/preloader.gif";

const Preloader = (props) => {
    return <div style={{ textAlign: "center" }}>
    <img src={preloader} />
  </div>
}

export default Preloader;
