import React from 'react';


function showInfo() {
  bioInfo.push(info[0]);
}
const info = ['<p key={1}>Ralph grew up in southern california in the happy go lucky and super sterile suburban town of Diamond Bar.</p><p>Ze went to art school in the midwest (KCMO) && in new york city</p> <p>Dear Ralph spends her waking hours thinking about CODE && CONCRETE && PUPPIEZ</p>'];

const Bio = (props) => {
  const bioInfo = [];
  return (
    <div>
      <button id='bio-btn' onClick={()=>{showInfo()}}>BIO</button>
      {bioInfo}
    </div>
  );
};

export default Bio;
