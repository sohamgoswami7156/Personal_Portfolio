import React from "react";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="pixel-loader" role="status" aria-live="polite">
        <div className="pixel-loader__title">Loading Save File</div>
        <div className="pixel-loader__bar" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="pixel-loader__meta">Preparing overworld...</div>
      </div>
    </div>
  );
}

export default Pre;
