import { useState, ReactNode } from "react";
import StepOne from "./StepOne";
import "./index.css";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Pizza from "./Pizza";
import Summary from "../components/Summary";
import Confirmation from "./Confirmation";
const Index = () => {
  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState({
    pizzaType: "",
    pizzaSize: "",
    number: 0,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNo: "",
    cardExpiration: "",
    cardCode: "",
    pizzaTitle: "",
    pizzaImage: "",
    terms: false,
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "cardNo" && value.length > 16) {
      return;
    }
    if (name === "cardCode" && value.length > 3) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setFormData({
      ...formData,
      terms: checked,
    });
  };
  interface Content {
    [key: number]: ReactNode;
  }

  const content: Content = {
    0: (
      <StepOne
        handleChange={handleChange}
        handleSelect={handleChange}
        formData={formData}
      />
    ),
    1: (
      <StepTwo
        handleChange={handleChange}
        handleSelect={handleChange}
        formData={formData}
      />
    ),
    2: <StepThree handleChange={handleChange} formData={formData} />,
    3: <Pizza formData={formData} setFormData={setFormData} />,
    4: <Confirmation formData={formData} handleChange={handleCheck} />,
  };

  const isNextDisabled = () => {
    let disabled = false;
    if (
      stage === 0 &&
      (formData.number === 0 ||
        formData.pizzaSize === "" ||
        formData.pizzaType === "")
    ) {
      disabled = true;
    }

    if (
      stage === 1 &&
      (formData.firstName === "" ||
        formData.lastName === "" ||
        formData.email === "" ||
        formData.address === "")
    ) {
      disabled = true;
    }
    if (
      stage === 2 &&
      (formData.cardNo === "" ||
        formData.cardNo.length < 16 ||
        formData.cardCode.length < 3 ||
        formData.cardExpiration === "" ||
        formData.cardCode === "")
    ) {
      disabled = true;
    }

    if (
      stage === 3 &&
      (formData.pizzaTitle === "" || formData.pizzaImage === "")
    ) {
      disabled = true;
    }

    if (stage === 4 && !formData.terms) {
      disabled = true;
    }

    return disabled;
  };
  return (
    <div className="overall-container">
      <h1>Step {stage + 1}</h1>
      <div className="container">
        <div className="content">
          <div>{content[stage]}</div>
        </div>

        {stage > 0 && stage < 4 && (
          <div className="sidebar">
            <Summary formData={formData} />
          </div>
        )}
      </div>
      <div className="buttons">
        <button
          disabled={stage === 0}
          onClick={() => setStage((prev) => prev - 1)}
        >
          Prev
        </button>
        {stage < 4 ? (
          <button
            disabled={isNextDisabled()}
            onClick={() => setStage((prev) => prev + 1)}
          >
            Next
          </button>
        ) : (
          <button
            disabled={isNextDisabled()}
            onClick={() => console.log(formData)}
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
