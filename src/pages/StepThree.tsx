import Input from "./Input";

type StepThreeProps = {
  formData: {
    cardNo: number | string;
    cardExpiration:  string;
    cardCode: number | string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StepThree = ({ handleChange, formData }: StepThreeProps) => {
  return (
    <div>
      <div className="item">
        <Input
          name="cardNo"
          handleChange={handleChange}
          value={formData.cardNo}
          placeholder="Card number"
          type="number"
          label="Card Number"
          fullWidth
        />
      </div>
      <div className="item">
        <Input
          name="cardExpiration"
          handleChange={handleChange}
          value={formData.cardExpiration}
          placeholder="Card Expiration"
          type="date"
          label="Card Expiration"
          fullWidth
          
        />
      </div>
      <div className="item">
        <Input
          name="cardCode"
          handleChange={handleChange}
          value={formData.cardCode}
          placeholder="Card code"
          type="number"
          label="Card code"
          fullWidth
        />
      </div>
    </div>
  );
};

export default StepThree;
