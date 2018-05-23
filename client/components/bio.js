import React from 'react';
import bioImg from './../images/bio.png';
// onClick={()=>{}
const Bio = (props) => {
  return (
    <div>
      <img id='bio-btn' src={bioImg} alt={"bioImg"} />
    </div>
  );
};

export default Bio;
