type AppProps = {
  name: string;
  placeholder?: string;
  value: string | number ;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  fullWidth? : boolean;
};
const Input = ({
  name,
  handleChange,
  value,
  placeholder,
  label,
  type,
  fullWidth
}: AppProps) => {
  return (
    <label>
      <p className="label">{label}</p>
      <input
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        type={type}
        style={{width : fullWidth ? '95%' : '47%'}}
      />
    </label>
  );
};

export default Input;
