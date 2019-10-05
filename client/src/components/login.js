import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import  './../css/login.css'

const FormPage = () => {
  return (
        <MDBContainer >
      <MDBRow className="login_row_margin">
      <MDBCol md="7">
      </MDBCol>
        <MDBCol md="5">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Log In</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your Password
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Log In
                    {/* <MDBIcon far icon="paper-plane" className="ml-2" /> */}
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;