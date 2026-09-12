import type { ReactNode } from "react";
type StackPanelProps = {
  children: ReactNode;
  stackCount: number;
  onRemoveAll: () => void;
};

const StackPanel = ({ children, stackCount, onRemoveAll, }: StackPanelProps) => {
  return (
    <div className="bg-base-100 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Stack</h2>
      <h4 className="text-gray-600">
        {stackCount} {stackCount === 1 ? "Technology" : "Technologies"} Selected
      </h4>
      {children}
      <button
        type="button"
        onClick={onRemoveAll}
        disabled={stackCount === 0}
        className="w-full mt-4 bg-red-500 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded"
      >
        Remove All
      </button>
    </div>
  );
};

export default StackPanel;
