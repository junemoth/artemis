import { ReactNode } from "react";

export const Metric = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="m-3 bg-gray-100 rounded-md py-4 px-8 shadow flex-grow flex-shrink-0">
      <label className="text-gray-400 block text-sm text-center uppercase pb-2">
        {label}
      </label>
      <div className="text-gray-600 text-xl font-semibold text-center">
        {children}
      </div>
    </div>
  );
};
