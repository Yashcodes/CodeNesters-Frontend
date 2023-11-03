import React, { useEffect, useState } from "react";

const Course = () => {
  const [cardData, setCardData] = useState("");

  useEffect(() => {
    const { card } = JSON.parse(localStorage.getItem("cardData"));

    setCardData(card);
  }, []);

  return (
    <div>
      <h1>{cardData?.title}</h1>
      <p>{cardData?.description}</p>
      <p>{cardData?.price}</p>
      <p>{cardData?.discount}</p>
    </div>
  );
};

export default Course;
