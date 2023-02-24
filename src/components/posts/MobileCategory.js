import Link from "next/link";

const MobileCategory = ({postCategories}) => {
  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
      {postCategories.map((category) => {
        return (
          <Link
            href={`/blogs/${category.englishTitle}`}
            key={category._id}
            className="block border border-gray-500 text-gray-500 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm"
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
