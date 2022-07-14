export interface InputProps {
  name: string;
  type?: string;
  value?: any;
  handleChange?: any;
  placeholder?: string;
  disable?: boolean;
  required?: boolean;
}

const ATextField: React.FC<InputProps> = ({
  required,
  disable,
  value,
  handleChange,
  type = "text",
  name,
  placeholder,
}) => {
  return (
    <input
      required={required}
      disabled={disable}
      type={type}
      value={value}
      onChange={handleChange}
      name={name}
      placeholder={placeholder || "Place holder"}
      className="h-10 w-full font-normal rounded-md md:text-sm text-xs px-3 border-2 focus:ring-1 focus:outline-none"
    />
  );
}; 

export default ATextField;
