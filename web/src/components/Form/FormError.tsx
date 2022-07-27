import { FiAlertCircle } from "react-icons/fi";

interface FormErrorProps {
  children?: React.ReactNode;
}

export const FormError = ({ children }: FormErrorProps): JSX.Element => {
  return (
    <div className="flex items-center text-red-600 gap-2">
      <div className="text-xl">
        <FiAlertCircle />
      </div>
      <span className="text-sm font-semibold">{children}</span>
    </div>
  );
};
