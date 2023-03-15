import React from "react";

import "./Colors.css";

function Colors() {
  return (
    <>
      <div className="topContainer">
        <div className="container">
          <h6>Primary</h6>
          <div className="rectangleColorContainer">
            <div className="rectangle rectangle1">HEX-000000(37%) LowEmphasis</div>
            <div className="rectangle rectangle2">HEX-000000(60%) MediumEmphasis</div>
            <div className="rectangle rectangle3">HEX-030303 Normal</div>
          </div>
        </div>
        <div className="container">
          <h6>secondary</h6>
          <div className="rectangleColorContainer">
            <div className="rectangle rectangle4">HEX-FFFFFF(37%) LowEmphasis</div>
            <div className="rectangle rectangle5">HEX-FFFFFF(60%) MediumEmphasis</div>
            <div className="rectangle rectangle6">HEX-FFFFFF(87%) Normal</div>
          </div>
        </div>
        <div className="container">
          <h6>Tertiary</h6>
          <div className="rectangleColorContainer">
            <div className="rectangle rectangle7">HEX-D1516F(60%) LowEmphasis</div>
            <div className="rectangle rectangle8">HEX-D1516F(87%) MediumEmphasis</div>
            <div className="rectangle rectangle9">HEX-D1516F Normal</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colors;
