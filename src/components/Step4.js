import React from 'react';

function Step4(props) {
  // console.log(props);
  return (
    <div className="stepContainer">
      <h1 className="stepNum">04</h1>
      <hr className="numHR" />
      <h4 className="stepTitle">{props.stage4Title}</h4>
      <p className="stepBody">{props.stage4Body}</p>
    </div>
  );
}

export default Step4;
