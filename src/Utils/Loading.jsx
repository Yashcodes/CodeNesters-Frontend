import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center gap-2 rounded"
        style={{
          color: "white",
          padding: "4px 8px",
          width: "150px",
          backgroundImage:
            "linear-gradient( to right, #9d50bb 0%, #6e48aa 51%, #9d50bb 100%)",
        }}
      >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span>Loading...</span>
      </div>
    </>
  );
};

export default Loading;
