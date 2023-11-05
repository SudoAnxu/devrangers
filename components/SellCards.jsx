import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getStorage, ref as stgRef, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as databaseRef, set } from "firebase/database";
import "./SellCards.css";

const writeUserData = (
  name,
  rollno,
  hall,
  email,
  phno,
  descp,
  amt,
  product,
  peopleCount
) => {
  const db = getDatabase();
  // console.log(db);
  set(databaseRef(db, "items/" + rollno), {
    username: name,
    email: email,
    rollno: rollno,
    hall: hall,
    phno: phno,
    descp: descp,
    amt: amt,
    product: product,
    status: "open",
    people: peopleCount,
  });

  // console.log(rollNoState);
};

function SellCards(props) {
  const storage = getStorage();
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();
  const [likeButtonState, setLikeButtonState] = useState("like");

  const fetchImage = (rollno) => {
    getDownloadURL(stgRef(storage, `images/${props.rollno}`))
      .then((url) => {
        setImageURL(url);
      })
      .catch(() => {
        navigate("/");
        setTimeout(() => {
          alert("No products available currently.");
        }, 1000);
      });
  };

  fetchImage();

  return (
    <>
      <div className="custom-card-margin">
        <div className="container box-shadow-card mb-4 ">
          <div className="row custom-flex">
            <div className="col-md-6 custom-flex ">
              <div className="d-flex justify-content-center m-2">
                {imageURL === "" ? (
                  <div className="full-width">
                    <div
                      className="spinner-border text-primary"
                      role="status"
                    ></div>
                  </div>
                ) : (
                  <img src={imageURL} className=" product-img my-4" alt="..." />
                )}
              </div>

              <div className="m-2">
                <h6>Seller</h6>
                <p key={props.seller}>{props.seller}</p>
                {/* <h6>Roll Number</h6>
                <p key={props.rollno}>{props.rollno}</p>
                <h6>Hall</h6>
                <p key={props.hall}>{props.hall}</p>
                <h6>Email Address</h6>
                <p key={props.email}>{props.email}</p>
                <h6>Phone Number</h6>
                <p key={props.phno}>{props.phno}</p> */}
                <h6>Product Type</h6>
                <p key={props.pdtype}>{props.pdtype}</p>
                <h6>Product Description</h6>
                <p className="card-text" key={props.descp}>
                  {props.descp}
                </p>
                <h6>Selling Price(INR)</h6>
                <p key={props.price}>{props.price}</p>

                <div className="d-flex flex-column">
                  <div className="d-flex flex-row">
                    {props.status === "close" ? (
                      <NavLink
                        to=""
                        className="btn-get-started-danger mx-2 my-3 d-flex align-items-center"
                      >
                        <s>CLOSED</s>
                      </NavLink>
                    ) : (
                      <NavLink
                        to=""
                        className="btn-get-started-success mx-2 my-3 d-flex align-items-center"
                        onClick={()=>{alert("Oops! Sorry, for our incapacity to initiate payment for the time being. We are still working on it. Just instead click on contact and try emailing the seller to avail the product.")}}
                      >
                        
                        BUY
                      </NavLink>
                    )}
                    <button
                      onClick={() => {
                        navigate("/email", {
                          state: { name: props.seller, email: props.email },
                        });
                      }}
                      className="btn-get-started mx-2 my-3"
                    >
                      CONTACT
                    </button>
                  </div>

                  <div className="d-flex flex-row">
                    <button className="btn-get-interested mx-2 my-3">
                      <i class="fa-solid fa-user">
                        &nbsp;&nbsp;&nbsp;&nbsp;{props.people}
                      </i>
                    </button>
                    {likeButtonState === "like" ? (
                      <button className="btn-like-dislike mx-2 my-3">
                        <i
                          class="fa-regular fa-thumbs-up"
                          onClick={() => {
                            // setPeople(people + 1);
                            setLikeButtonState("dislike");
                            writeUserData(
                              props.seller,
                              props.rollno,
                              props.hall,
                              props.email,
                              props.phno,
                              props.descp,
                              props.price,
                              props.pdtype,
                              props.people + 1
                            );
                          }}
                        ></i>
                      </button>
                    ) : (
                      <button
                        className="btn-like-dislike mx-2 my-3"
                        onClick={() => {
                          // setPeople(people - 1 <= 0 ? 0 : people - 1);
                          setLikeButtonState("like");
                          writeUserData(
                            props.seller,
                            props.rollno,
                            props.hall,
                            props.email,
                            props.phno,
                            props.descp,
                            props.price,
                            props.pdtype,
                            (props.people - 1 <= 0)?0:props.people - 1
                          );
                        }}
                      >
                        <i class="fa-regular fa-thumbs-down"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellCards;
