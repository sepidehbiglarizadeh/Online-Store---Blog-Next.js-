import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

const SortBar = () => {
  return (
    <div className="bg-white rounded-3xl px-4 flex items-center">
      <div className="flex gap-x-2 items-center ml-4">
        <AdjustmentsVerticalIcon className="w-6 h-6" />
        <span className="text-gray-700">مرتب سازی :</span>
      </div>
      <ul className="flex items-center gap-x-4">
        <li className="py-4 cursor-pointer text-gray-700">پر بازدیدترین</li>
        <li className="py-4 cursor-pointer text-gray-700">محبوب ترین</li>
        <li className="py-4 cursor-pointer text-gray-700">جدیدترین</li>
      </ul>
    </div>
  );
};

export default SortBar;
