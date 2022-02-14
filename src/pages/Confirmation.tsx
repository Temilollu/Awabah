import Summary from "../components/Summary";

type ConfirmationProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    number: number;
    pizzaType: string;
    pizzaSize: string;
    pizzaTitle: string;
    terms?: boolean;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Confirmation = ({ formData, handleChange }: ConfirmationProps) => {
  const calculatePrice = () => {
    let price;
    if (formData.pizzaSize === "small") {
      price = 10;
    } else if (formData.pizzaSize === "medium") {
      price = 20;
    } else {
      price = 30;
    }
    return price * formData.number;
  };
  return (
    <div>
      <Summary formData={formData}>
        <>
          <div className="summary-item">
            <p className="key">Computed Price :</p>
            <p className="value">$ {calculatePrice()}</p>
          </div>
          <div className="summary-item">
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <input
                type="checkbox"
                name="terms"
                defaultChecked={formData.terms}
                onChange={handleChange}
              />{" "}
              <span>i have read the terms and agreement</span>
            </div>
          </div>
        </>
      </Summary>
    </div>
  );
};

export default Confirmation;
