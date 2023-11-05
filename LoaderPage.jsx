import React from "react";

function LoaderPage() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center" style={{ width: "100vw", height: "100vh" }}>
        {/* <div className="d-flex justify-content-center mb-4"> */}
          <div className="spinner-border text-primary" role="status"></div>
        {/* </div> */}
      </div>
    </>
  );
}

export default LoaderPage;
