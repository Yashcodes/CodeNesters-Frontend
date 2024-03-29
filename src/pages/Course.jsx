import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Utils/Loading";

const Course = () => {
  const [course, setCourse] = useState({});

  const { id } = useParams();
  console.log(id);

  const getCourse = useCallback(async () => {
    const response = await axios.get(
      `https://code-nesters-backend.vercel.app/api/v1/course/get-course/${id}`
    );

    setCourse(response?.data?.course);
  }, [id]);

  useEffect(() => {
    getCourse();
  }, [getCourse]);

  return (
    <>
      {Object.keys(course).length !== 0 ? (
        <div>
          <h1>{course?.courseName}</h1>
          <p>{course?.courseContent}</p>
          <p>{course?.coursePriceDiscount}</p>
          <p>{course?.courseDiscountedPrice}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Course;
