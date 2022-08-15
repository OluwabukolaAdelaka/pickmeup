import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Services.css";

const Services = () => {
  return (
    <>
      <Navigation />
      <section
        className="d-flex flex-column justify-content-center align-items-center px-1 pb-5"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fcee21 0%, #fcee21 100%)",
        }}
      >
        <h3 className="service-hero-title">Our Services</h3>
        <div className="row text-center d-flex justify-content-center align-items-center">
          <div className="d-none col"></div>
          <div className="col-sm-12 col-md-8">
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card border-light">
                  <div class="card-body">
                    <h5 class="card-title service-title">
                      International Delivery
                    </h5>
                    <p class="card-text service-msg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam natus, modi consequatur ipsa praesentium neque
                      sint provident ad tempore corrupti repudiandae atque
                      possimus autem nostrum nemo doloremque adipisci magnam
                      voluptates voluptatibus! Voluptatum laudantium eius at
                      labore quos quibusdam doloremque veniam.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-light">
                  <div class="card-body">
                    <h5 class="card-title service-title">Cargo Service</h5>
                    <p class="card-text service-msg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam natus, modi consequatur ipsa praesentium neque
                      sint provident ad tempore corrupti repudiandae atque
                      possimus autem nostrum nemo doloremque adipisci magnam
                      voluptates voluptatibus! Voluptatum laudantium eius at
                      labore quos quibusdam doloremque veniam.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-light">
                  <div class="card-body">
                    <h5 class="card-title service-title">Import</h5>
                    <p class="card-text service-msg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam natus, modi consequatur ipsa praesentium neque
                      sint provident ad tempore corrupti repudiandae atque
                      possimus autem nostrum nemo doloremque adipisci magnam
                      voluptates voluptatibus! Voluptatum laudantium eius at
                      labore quos quibusdam doloremque veniam.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card border-light">
                  <div class="card-body">
                    <h5 class="card-title service-title">Consultancy</h5>
                    <p class="card-text service-msg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam natus, modi consequatur ipsa praesentium neque
                      sint provident ad tempore corrupti repudiandae atque
                      possimus autem nostrum nemo doloremque adipisci magnam
                      voluptates voluptatibus! Voluptatum laudantium eius at
                      labore quos quibusdam doloremque veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none col"></div>
        </div>
      </section>
    </>
  );
};

export default Services;
