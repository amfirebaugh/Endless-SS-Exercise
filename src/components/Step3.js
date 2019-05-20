import React from 'react';

function Step3(props) {
  // console.log(props);
  return (
    <div className="stepContainer">
      <h1 className="stepNum">03</h1>
      <hr className="numHR" />
      <h4 className="stepTitle">{props.stage3Title}</h4>
      <p className="stepBody">{props.stage3Body}</p>
    </div>
  );
}

export default Step3;
