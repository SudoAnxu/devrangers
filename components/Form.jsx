import React, { useState } from "react";
// import '/Form.css';
// import "..firebase/"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref as databaseRef, set } from "firebase/database";
import { getStorage, ref as stgRef, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMM56fnkSA1P5p4b6plQso_3001MpEEYI",
  authDomain: "kgpsellex.firebaseapp.com",
  projectId: "kgpsellex",
  storageBucket: "kgpsellex.appspot.com",
  messagingSenderId: "750261842834",
  appId: "1:750261842834:web:309fb0919f637e0932074b",
  measurementId: "G-ZTC4HQ2M0V",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function Form() {
  const uploadImage = (array, rollno) => {
    if (array[0] == null) {
      setPosted("false");
      setTimeout(() => {
        alert("Please upload image!");
      }, 1000);
      
    } else {
      const storage = getStorage();
      const storageRef = stgRef(storage, "images/" + rollno);

      uploadBytes(storageRef, array[0])
        .then(() => {
          console.log("Image pushed"); //render the other component then
          setPosted("false");
          setTimeout(() => {
            alert("Post has been successfully made! Repost to update.");
            alert(
              "Please keep checking your mail inbox or spam folder. We might contact you on behalf of buyer."
            );
            navigate("/");
          }, 1000);

          // setRedirect("true");
        })
        .catch((error) => {
          console.log(error);
          setPosted("false");
          setTimeout(() => {
            alert("Your post was unsuccessful! Please retry later.");
            navigate("/sell");
          }, 1000);
        });
      // console.log(array, rollno);
    }
  };

  const writeUserData = (
    name,
    rollno,
    hall,
    email,
    phno,
    descp,
    amt,
    product
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
      people: 0
    });

    // console.log(rollNoState);
    uploadImage(arr, rollNoState);
  };

  const [arr, setArr] = useState([]);
  const [rollNoState, setRollNoState] = useState("");
  const navigate = useNavigate();
  const [posted, setPosted] = useState("false");

  const imageUploaded = (array) => {
    setArr(array);
  };

  const push = () => {
    const answer = window.confirm("Are you sure you want to proceed?");
    if (answer) {
      const name = document.getElementById("name").value;
      const rollno = document.getElementById("rollno").value;
      const hall = document.getElementById("hall").value;
      const email = document.getElementById("email").value;
      const phno = document.getElementById("phno").value;
      const descp = document.getElementById("descp").value;
      const amt = document.getElementById("amt").value;
      const product = document.querySelector("#product").value;
      const num = Number(amt);
      const phnum = Number(phno);
      if (
        name === "" ||
        rollno === "" ||
        hall === "" ||
        email === "" ||
        phno === "" ||
        descp === "" ||
        amt === "" ||
        product === "" ||
        arr.length == 0
      ) {
        alert("All the fields are mandatory!");
      } else if (phnum != phno || phno.length !== 10) {
        alert("A phone number is supposed to have ten digits!");
      } else if (num != amt) {
        alert("Please enter the price in digits!");
      } else {
        setPosted("true");
        writeUserData(name, rollno, hall, email, phno, descp, amt, product);
        // console.log(name, rollno, hall, email, phno, descp, amt, product);
        // console.log(document.getElementById("rollno"))
      }
    }
  };
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Enter the details below</h1>
      </div>
      <div className="custom-card-margin">
        <div className="container contact_div box-shadow-card mx-auto">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto d-flex justify-content-center flex-column">
              <div className="my-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="my-4">
                <label htmlFor="rollno" className="form-label">
                  Roll Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rollno"
                  placeholder="22XX10011"
                  onChange={() => {
                    // console.log(document.getElementById("rollno").value)
                    setRollNoState(document.getElementById("rollno").value);
                  }}
                />
              </div>
              <div className="my-4">
                <label htmlFor="hall" className="form-label">
                  Hall Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="hall"
                  placeholder="LBS"
                />
              </div>
              <div className="my-4">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-4">
                <label htmlFor="phno" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phno"
                  placeholder="10 digits"
                />
              </div>

              <div className="my-4">
                <label htmlFor="product" className="form-label">
                  Product
                </label>
                <select
                  className="form-select"
                  id="product"
                  aria-label="Default select example"
                >
                  {/* <option selected>Menu</option> */}
                  <option value="ED-Kit">ED-Kit</option>
                  <option value="Cycle">Cycle</option>
                  <option value="Books">Books</option>
                  <option value="Other">Others</option>
                </select>
              </div>

              <div className="my-4">
                <label htmlFor="descp" className="form-label">
                  Product Description
                </label>
                <textarea
                  className="form-control"
                  id="descp"
                  rows="3"
                  placeholder="Write a short description."
                ></textarea>
              </div>
              <div className="my-4">
                <label htmlFor="amt" className="form-label">
                  Selling Price(INR)
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="amt"
                  placeholder="In digits."
                />
              </div>

              <div className="my-4">
                <label htmlFor="image" className="form-label">
                  Image of the Product
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="image"
                  onChange={(e) => {
                    imageUploaded(e.target.files);
                  }}
                />
              </div>
              {posted === "true" ? (
                <div className="d-flex justify-content-center mb-4">
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                </div>
              ) : (
                <button
                  className="btn-get-started mb-4"
                  type="button"
                  onClick={() => {
                    push();
                  }}
                >
                  SUBMIT FORM
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
