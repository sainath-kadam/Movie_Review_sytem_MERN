import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="footer footer-dark bg-primary" className="font-small pt-15 mt-15">
    
      <div className="footer-copyright text-center py-8">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Sainath Kadam
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;