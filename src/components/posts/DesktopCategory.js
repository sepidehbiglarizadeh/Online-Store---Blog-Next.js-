import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const DesktopCategory = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      {/* accordian header */}
      <div
        className="flex items-center justify-between py-4 px-4 cursor-pointer bg-indigo-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-indigo-400 transition-all duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* accordian content */}
      <div className={` ${isOpen ? "block" : "hidden"}`}>
        <Link href="/blogs" className="block py-2 hover:bg-indigo-50 pr-4 mb-1">
          همه مقالات
        </Link>
        {postCategories.map((category) => {
          return (
            <Link
              href={`/blogs/${category.englishTitle}`}
              key={category._id}
              className="block py-2 hover:bg-indigo-50 pr-4"
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopCategory;
