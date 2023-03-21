import { ReactNode } from "react";

export const Metric = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="m-3 bg-gray-100 rounded-md py-4 px-8 shadow block flex-grow">
      <label className="text-gray-400 block text-sm text-center uppercase pb-2">
        {label}
      </label>
      <div className="text-gray-600 text-xl font-semibold text-center">
        {children || (
          <div className="my-4 text-center w-15 h-5 bg-gray-200 rounded animate-pulse"></div>
        )}
      </div>
    </div>
  );
};
