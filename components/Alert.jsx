import React, { useEffect, useState } from "react";
import "./Alert.css";

function Alert() {
  const alertDiv = document.getElementById("alert-div");
  const [dis, setDis] = useState("none");

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
        setDis("block");
      }, 2000);
  
    return () => {
      clearTimeout(alertTimeout);
    }
  }, [])
  

  return (
    <div className="alert alert-warning" style={{ display: dis }}>
      <div className="d-flex justify-content-between align-items-center">
        <div>Please keep checking the <strong>spam folder</strong> of your mail application. The buyer
        might try to contact you!</div>
        
        <button
          onClick={()=>{setDis("none")}}
          className="btn-close mx-2"
          
        ></button>
      </div>
    </div>
  );
}

export default Alert;
