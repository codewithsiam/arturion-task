import React from "react";
import PaymentForm from "./PaymentForm";
import Newsletter from "../Home/Newsletter/Newsletter";

const PaymentPage = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="mb-[100px]">
        <PaymentForm />
      </div>

      <Newsletter />
    </div>
  );
};

export default PaymentPage;
