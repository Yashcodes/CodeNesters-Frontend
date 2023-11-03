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
      
    </div>
  );
};

export default Course;
