import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RestApi from "../../services/api";

function AppyService(props) {
  const [DocumentRequried, setDocumentRequried] = useState([]);
  const [ServiceDetails, setServiceDetails] = useState([]);
  
    let {id,sId} = useParams();
     
  useEffect(() => {
   
    fetchData();
  }, [id,sId]);

  const fetchData = () => {
    
   
    RestApi.serviceDocument(id, sId).then(
      (res) => {
        console.log(res);
        if (res.data.status) {
          setDocumentRequried(res.data.data.document_details);
          if(res.data.data.service_details) {setServiceDetails(res.data.data.service_details);}
        }
      }
    );
  };
  console.log("ServiceDetails",ServiceDetails)
  return (
    <>
      <div class="col-lg-8">
        <h3 class="servicehead">{ServiceDetails.service_name}</h3>
        <div class="servicebody">
          <div class="section-title">
            <p>{ServiceDetails.description}</p>
          </div>
          <h2 class="contact-title">Brief Description of Requirements</h2>
          <div
            class=""
            style={{
              float: "right",
              marginTop: "6px",
              fontWeight: "600!important",
              textTransform: "uppercase",
            }}
          >
            Financial Year:&nbsp;
            <form style={{ float: "right", position: "relative", top: "-3px" }}>
              <select
                name="fyear"
                id="fyear"
                style={{ width: "100px", padding: "4px" }}
              >
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </form>
          </div>
          <form
            class="form-contact contact_form"
            method="post"
            id="contactForm"
            novalidate="novalidate"
          >
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    class="form-control w-100"
                    name="message"
                    id="message"
                    cols="30"
                    rows="9"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Message'"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <h2 class="contact-title">Documents Required</h2>
                <table>
                  <tr>
                    <th width="30%">Documents Type</th>
                    <th width="30%">Select a file to upload</th>
                    <th width="30%">Previous Uploaded Document</th>
                  </tr>
                  {DocumentRequried.length > 0 &&
                    DocumentRequried.map((each, key) => {
                      return (
                        <tr>
                          <td key={key}>
                            {each.display_name} {each.is_mandatory == 'yes' &&<span>*</span>}
                          </td>
                          <td>
                            <input
                              type="file"
                              name="fileToUpload"
                              id="fileToUpload"
                            />
                          </td>
                          <td>Previous Doc.</td>
                        </tr>
                      );
                    })}
                  {/* <tr>
                          <td>
                            PAN Card <span>*</span>
                          </td>
                          <td>
                            <input
                              type="file"
                              name="fileToUpload"
                              id="fileToUpload"
                            />
                          </td>
                          <td>Previous Doc.</td>
                        </tr> */}
                </table>
                {/* <!-- <p style="color: red;">[Note: (*) for Mandatory Field]</p> --> */}
                <div class="col-md-3" style={{ padding: "0" }}>
                  <div class="service-charges">
                    <p>
                      <b>Service Charges: Rs. {ServiceDetails.service_charge}</b>
                    </p>
                    <h4>Payable Option</h4>
                    <ol>
                      <li>
                        Advance: <span>1000.00</span>
                      </li>
                      <li>
                        On Completion: <span>1000.00</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group text-center">
              <a href="doc-submit.php" class="button" style={{ margin: "0" }}>
                Submit
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" class="button save-btn" style={{ margin: "0" }}>
                Save
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AppyService;
