import { TravelInputFieldProps } from "../../types/interfaces";

export const TravelFormInput: React.FC<TravelInputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  errorMessage,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={value}
        onChange={onChange}
        required={required}
      />
      {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};

