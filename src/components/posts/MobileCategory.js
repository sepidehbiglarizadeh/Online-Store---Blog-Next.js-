import Link from "next/link";
import { useRouter } from "next/router";

const MobileCategory = ({ postCategories }) => {
  const { query } = useRouter();

  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
      <Link
        href={`/blogs`}
        className={`block border border-gray-500 text-gray-500 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm ${
          !query.categorySlug
            ? "border-indigo-700 text-indigo-700 bg-indigo-100 border-2"
            : ""
        }`}
      >
        همه مقالات
      </Link>
      {postCategories.map((category) => {
        return (
          <Link
            href={`/blogs/${category.englishTitle}`}
            key={category._id}
            className={`block border border-gray-500 text-gray-500 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm ${
              query.categorySlug === category.englishTitle
                ? "border-indigo-700 text-indigo-700 bg-indigo-100 border-2"
                : ""
            }`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
