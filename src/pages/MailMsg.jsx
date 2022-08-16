import React from "react";

function MailMsg() {
  return (
    <div className="container">
      <div className="row d-flex flex-colum justify-content-center align-items-center mt-5 py-5">
        <div className="d-none col"></div>
        <div className="col-sm-12 col-md-6">
          <div className="card text-center py-5">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5
                className="card-title pb-3"
                style={{
                  color: "#1e1e1e",
                  fontWeight: "700",
                  fontSize: "3rem",
                }}
              >
                Check your email
              </h5>
              <p
                className="card-text"
                style={{
                  color: "#1e1e1e",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                We have just sent you he password reset link. click the link in
                the email and folllow the instruction to reset your password.
              </p>
            </div>
          </div>
        </div>
        <div className="d-none col"></div>
      </div>
    </div>
  );
}

export default MailMsg;
