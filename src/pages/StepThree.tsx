import Input from "./Input";

type StepThreeProps = {
  formData: {
    cardNo: string;
    cardExpiration: string;
    cardCode: string;
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
        {formData.cardNo.length < 16 && formData.cardNo !== "" && (
          <div className="error">Card number must be 16 digits</div>
        )}
      </div>
      <div className="item">
        <Input
          name="cardExpiration"
          handleChange={handleChange}
          value={formData.cardExpiration}
          placeholder="Card Expiration"
          type="month"
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
        {formData.cardCode.length < 3 && formData.cardCode !== "" && (
          <div className="error">Card code must be 3 digits</div>
        )}
      </div>
    </div>
  );
};

export default StepThree;
