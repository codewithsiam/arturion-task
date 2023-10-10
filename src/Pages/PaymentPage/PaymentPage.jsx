import React from "react";
import PaymentForm from "./PaymentForm";
import Newsletter from "../Home/Newsletter/Newsletter";

const PaymentPage = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <h1 className="text-[35px] font-medium mx-[150px] pt-[90px]">Billing Details</h1>
      <div className="mb-[100px] pt-[50px]">
        <PaymentForm />
      </div>

      <Newsletter />
    </div>
  );
};

export default PaymentPage;
