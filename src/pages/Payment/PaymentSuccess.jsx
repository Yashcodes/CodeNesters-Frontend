import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);

    setTimeout(() => {
      navigate("/dashboard/user/cart");
      setIsNavigating(false);
    }, [3000]);
  }, [navigate]);
  return (
    <div>
      <h1>Payment Success</h1>
      <p>Reference No.: {searchQuery.get("referenceId")}</p>
      {isNavigating === true ? <p>Redirecting to dashboard...</p> : ""}
    </div>
  );
};

export default PaymentSuccess;
