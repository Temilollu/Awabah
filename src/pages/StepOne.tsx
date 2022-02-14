import { pizzaSize, pizzaTypes } from "../constants";
import Input from "./Input";

type StepOneProps = {
  formData: {
    number: number;
    pizzaType: string;
    pizzaSize: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const StepOne = ({ handleChange, formData, handleSelect }: StepOneProps) => {


  return (
    <div>
      <div className="item">
        <label htmlFor="pizzaType">Choose pizza type:</label>

        <select
          name="pizzaType"
          id="pizzaType"
          value={formData.pizzaType}
          onChange={handleSelect}
          defaultValue={formData.pizzaType}
        >
          {pizzaTypes.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="item">
        <label htmlFor="pizzaSize">Choose pizza size:</label>

        <select
          name="pizzaSize"
          id="pizzaSize"
          value={formData.pizzaSize}
          onChange={handleSelect}
        >
          {pizzaSize.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="item">
        <Input
          name="number"
          handleChange={handleChange}
          value={formData.number}
          placeholder="Number"
          type="number"
          label="Number"
        />
      </div>
    </div>
  );
};

export default StepOne;
