import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";
import jsPDF from 'jspdf'
import html2canvas from "html2canvas";

function CaseLawModal(props) {
  
const printDocument = () =>{
  const input = document.getElementById('HTMLtoPDF');
  html2canvas(input)
    .then((canvas) => {
      let imgWidth = 200;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save(`${props.title}.pdf`);
    })
  ;
}


  return (
    <div>
      <a onClick={()=>printDocument()} id="divToPrint" style={{ float: "right" }} class="btn button">
            Download Pdf
          </a>
      <div id="HTMLtoPDF" className="download-pdf">
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
