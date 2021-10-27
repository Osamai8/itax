import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";

function CaseLawModal(props) {
  const inputEl = useRef(null);
  const options = {
    orientation: 'portrait',
};
  return (
    <div>
      <ReactToPdf targetRef={inputEl} options={options}   filename={`${props.title}.pdf`}>
        {({ toPdf }) => (
          <a onClick={toPdf} style={{ float: "right" }} class="btn button">
            Download Pdf
          </a>
        )}
      </ReactToPdf>

      <div ref={inputEl} className="download-pdf">
        <div
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
      </div>
    </div>
  );
}

export default CaseLawModal;
