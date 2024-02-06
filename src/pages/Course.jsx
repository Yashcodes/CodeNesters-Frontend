import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const [course, seteCourse] = useState({});

  const { id } = useParams();
  console.log(id);

  const getCourse = useCallback(async () => {
    const response = await axios.get(
      `https://code-nesters-backend.vercel.app/api/v1/course/get-course/${id}`
    );

    seteCourse(response?.data?.course);
  }, [id]);

  useEffect(() => {
    getCourse();
  }, [getCourse]);

  return (
    <div>
      <h1>{course?.courseName}</h1>
      <p>{course?.courseContent}</p>
      <p>{course?.coursePriceDiscount}</p>
      <p>{course?.courseDiscountedPrice}</p>
    </div>
  );
};

export default Course;
