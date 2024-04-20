import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import HeightBox from "../HeightBox";

export default function Footer() {
  return (
    <MDBFooter
      //   bgColor="dark"
      className="text-center text-lg-start text-muted text-white"
      id="Contact"
      style={{ backgroundColor: "#1E1D1E" }}
    >
      <HeightBox size={10} />
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Established in 2023, ****Company**** Web Solutions PVT LTD,
                proved to be a start-up that revolutionized its client’s digital
                journey. When people think of development in Indore, their first
                choice is ****Company****!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Technologies</h6>
              <p>
                <a href="#!" className="text-reset">
                  React | Flutter
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Node.js | Express.js
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PHP | Laravel
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  MySQL | MongoDB
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tools</h6>
              <p>
                <a href="#!" className="text-reset">
                  VSCode | XCode
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  InelliJ IDEA | Postman
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Android Studio | Insomnia
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Figma | Illastrator
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Colombo, Sri Lanka
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@companyweb.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 94
                71 654 3570
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 94
                11 342 9702
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="d-flex justify-content-center">
        <a href="" className="me-4 text-reset">
          <MDBIcon color="secondary" fab icon="facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="secondary" fab icon="twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="secondary" fab icon="google" />
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="secondary" fab icon="instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <MDBIcon color="secondary" fab icon="linkedin" />
        </a>
      </div>
      <HeightBox size={10} />

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        All rights reserved © {new Date().getFullYear()} &nbsp;
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          CompanyWeb.com
        </a>
      </div>
    </MDBFooter>
  );
}
