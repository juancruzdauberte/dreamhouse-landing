import { ShowerHead, Ban } from "lucide-react";

export const NoTowelWidget = () => {
  return (
    <div className="relative w-8 h-8">
      <ShowerHead className="absolute inset-0 w-8 h-8 text-gray-500" />
      <Ban className="absolute inset-0 w-8 h-8 text-red-500" />
    </div>
  );
};
