import React from 'react';

function Step2(props) {
  console.log(props);
  return (
    <div className="stepContainer">
      <h1 className="stepNum">02</h1>
      <hr className="numHR" />
      <h4 className="stepTitle">{props.stage2Title}</h4>
      <p className="stepBody">{props.stage2Body}</p>
    </div>
  );
}

export default Step2;
