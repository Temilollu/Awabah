import Input from "./Input";

type StepTwoProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;

};
const StepTwo = ({ handleChange, formData, handleSelect }: StepTwoProps) => {
  return (
    <div>
      <div className="item">
        <Input
          name="firstName"
          handleChange={handleChange}
          value={formData.firstName}
          placeholder="First name"
          type="text"
          label="First name"
          fullWidth
          
        />
      </div>
      <div className="item">
        <Input
          name="lastName"
          handleChange={handleChange}
          value={formData.lastName}
          placeholder="Last name"
          type="text"
          label="Last name"
          fullWidth
        />
      </div>
      <div className="item">
        <Input
          name="email"
          handleChange={handleChange}
          value={formData.email}
          placeholder="Email"
          type="email"
          label="Email"
          fullWidth
        />
      </div>
      <div className="item">
        <Input
          name="address"
          handleChange={handleChange}
          value={formData.address}
          placeholder="Address"
          type="text"
          label="Address"
          fullWidth
        />
      </div>
    </div>
  );
};

export default StepTwo;
