import { ReactNode } from "react";

type SummaryProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    number: number;
    pizzaType: string;
    pizzaSize: string;
  };
  children?: ReactNode;
};

const Summary = ({ formData, children }: SummaryProps) => {
  return (
    <>
      <h4>Order Summary</h4>
      <div className="summary-item">
        <p className="key">Pizza type :</p>
        <p className="value">{formData.pizzaType}</p>
      </div>
      <div className="summary-item">
        <p className="key">Pizza size :</p>
        <p className="value">{formData.pizzaSize}</p>
      </div>
      <div className="summary-item">
        <p className="key">Number :</p>
        <p className="value">{formData.number}</p>
      </div>
      <div className="summary-item">
        <p className="key">Name :</p>
        <p className="value" style={{ whiteSpace: "nowrap" }}>
          {formData.firstName} {formData.lastName}
        </p>
      </div>
      <div className="summary-item">
        <p className="key">Email :</p>
        <p className="value">{formData.email}</p>
      </div>
      <div className="summary-item">
        <p className="key">Address :</p>
        <p className="value">{formData.address}</p>
      </div>
      {children}
    </>
  );
};

export default Summary;
