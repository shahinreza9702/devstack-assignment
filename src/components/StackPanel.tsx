import type { ReactNode } from "react";
type StackPanelProps = {
  children: ReactNode;
};
const StackPanel = ({ children }: StackPanelProps) => {
  return (
    <div className="bg-base-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Stack</h2>
      <h4 className="text-gray-600">2 Technology Selected</h4>
      {children}
      <button className="w-full mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Remove All
      </button>
    </div>
  );
};

export default StackPanel;
