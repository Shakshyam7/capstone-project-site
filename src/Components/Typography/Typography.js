import React from "react";

import "./Typography.css";

function Typography() {
  return (
    <>
      <div className="type__container">
        <div className="fontTitle">
          Font-Family: 'Hind Siliguri', sans-serif;
        </div>
        <div className="heading1">
          <span className="typeSize">96px</span> Heading 1
        </div>
        <div className="heading2">
          <span className="typeSize">60px</span> Heading 2
        </div>
        <div className="heading3">
          <span className="typeSize">48px</span> Heading 3
        </div>
        <div className="heading4">
          <span className="typeSize">36px</span> Heading 4
        </div>
        <div className="heading5">
          <span className="typeSize">24px</span> Heading 5
        </div>
        <div className="heading6">
          <span className="typeSize">20px</span> Heading 6
        </div>
        <div className="body1">
          <span className="typeSize">16px</span> Paragraph
        </div>
        <div className="body2">
          <span className="typeSize">14px</span> Paragraph
        </div>
        <div className="captions">
          <span className="typeSize">12px</span> caption
        </div>
      </div>
    </>
  );
}

export default Typography;
