import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <p>
                  <h1>
                    <i class="fa-solid fa-person-circle-question"></i>
                    &nbsp; About Us
                  </h1>

                  <p>
                    Welcome to our college's exclusive online marketplace, where
                    the spirit of commerce thrives within our vibrant student
                    community. This platform serves as a meeting ground for
                    buyers and sellers, facilitating transactions and fostering
                    a sense of connectivity within our campus. At KGP-Bazar, we
                    believe in empowering our students and providing them with a
                    convenient and reliable avenue for buying and selling goods
                    within our college community. Whether you're a passionate
                    entrepreneur looking to showcase your creations or a student
                    seeking to purchase unique items, our platform is designed
                    to cater to your needs.
                  </p>
                  <h1>
                    <i class="fa-solid fa-hand-holding-dollar"></i>&nbsp;Our
                    Mission:
                  </h1>

                  <p>
                    Our mission is to create a safe, user-friendly, and
                    inclusive marketplace that encourages students to engage in
                    sustainable consumption while fostering a sense of
                    camaraderie. We aim to empower individuals, promote
                    entrepreneurship, and build a vibrant ecosystem where every
                    member of our college can benefit from the exchange of goods
                    and ideas.
                  </p>
                  <h1>
                    <i class="fa-solid fa-bag-shopping"></i>&nbsp;How It Works:
                  </h1>

                  <p>
                    Posting and browsing products on KGP-Bazar is incredibly
                    simple. Sellers can easily create listings, upload images,
                    and provide detailed descriptions of their products. Buyers
                    can browse through the listings, compare prices, and connect
                    with sellers directly through our secure messaging system.
                  </p>
                  <h1>
                    <i class="fa-solid fa-shield"></i>&nbsp;Safety and Security:
                  </h1>

                  <p>
                    We prioritize the safety and security of our users. Our
                    platform implements measures to protect against fraud and
                    ensures that transactions take place within a trusted
                    environment. While we encourage open communication and
                    negotiation between buyers and sellers, we also provide
                    guidelines to promote fair practices and maintain a positive
                    user experience.
                  </p>
                </p>
                <h1>
                  <i class="fa-sharp fa-solid fa-comments"></i>&nbsp;Feedback
                </h1>
                <p>
                  Feedback and Support: We value the feedback of our users as it
                  helps us continually improve our platform. If you have any
                  suggestions, questions, or concerns, please do not hesitate to
                  reach out to any of us.
                </p>
              </div>

              <div className="col-md-6 pt-5 pt-lg-0 mb-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h2>Souvik Dutta</h2>
                <div><i class="fa-solid fa-envelope"></i>&nbsp;<a href="">psouvikdutta10@gmail.com</a></div>
                <div className="mb-3"><i class="fa-brands fa-whatsapp"></i>&nbsp;<a href="">8327574739</a></div>
                
                

                <h2>Priyangshu Karmakar</h2>
                <div><i class="fa-solid fa-envelope"></i>&nbsp;<a href="">priyangshu.0718@gmail.com</a></div>
                <div><i class="fa-brands fa-whatsapp"></i>&nbsp;<a href="">7872040073</a></div>



                <h2>Soumyadip paik</h2>
                <div><i class="fa-solid fa-envelope"></i>&nbsp;<a href="">Soumyadip.paik.gns@gmail.com</a></div>
                <div><i class="fa-brands fa-whatsapp"></i>&nbsp;<a href="">8617457516</a></div>
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
