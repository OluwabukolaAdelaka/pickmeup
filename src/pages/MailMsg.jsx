import React from "react";
import Lock from "../assets/lock.png";

function MailMsg() {
  return (
    <div className="container">
      {/* <div className="row row-cols-1 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={Lock} class="card-img-top" alt="..." />
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row d-flex flex-colum justify-content-center align-items-center mt-3 py-5">
        <div className="d-none col"></div>
        <div className="col-sm-12 col-md-4">
          <div className="card text-center py-5">
            <div className="card-body">
              <img
                src={Lock}
                className="card-img-top img-fluid mb-4"
                alt="..."
                style={{
                  width: "25%",
                  height: "auto",
                }}
              />
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
