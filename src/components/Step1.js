import React from 'react';

function Step1(props) {
  // console.log(props);
  return (
    <div className="stepContainer">
      <h1 className="stepNum">01</h1>
      <hr className="numHR" />
      <h4 className="stepTitle">{props.stage1Title}</h4>
      <p className="stepBody">{props.stage1Body}</p>
    </div>
  );
}

export default Step1;
