import {
  AdjustmentsVerticalIcon,
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const PostList = ({ blogsData }) => {
  return blogsData.docs.map((item, index) => {
    return (
      <div
        key={index}
        className="col-span-6 md:col-span-3 lg:col-span-2 rounded-3xl p-2 bg-white flex flex-col max-h-[330px]"
      >
        {/* cover image */}
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <Link href={`/posts/${item.hashId}/${item.slug}`}>
            <img
              src={item.coverImage}
              alt=""
              className="rounded-2xl w-full h-full object-center object-cover"
            />
          </Link>
        </div>
        {/* blog content */}
        <div className="bg-gray-50 p-2 rounded-2xl h-60 flex flex-col w-full justify-between flex-1">
          <Link href={`/posts/${item.hashId}/${item.slug}`}>
            <h2 className="mb-4 font-bold">{item.title}</h2>
          </Link>
          {/* blog data */}
          <div>
            {/* blog author-category */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="/images/next.jpeg"
                  alt=""
                  className="w-6 h-6 rounded-full ring-2 ring-white ml-2"
                />
                <span className="text-sm text-gray-600">
                  {item.author.name}
                </span>
              </div>
              <Link href={`/blogs/${item.category.englishTitle}`}>
                <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">
                  {item.category.title}
                </span>
              </Link>
            </div>
            {/* blog interaction */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1 bg-indigo-50 rounded-sm">
                  <ChatBubbleLeftEllipsisIcon className="w-4 h-4 stroke-indigo-600" />
                  <span className="text-xs text-indigo-600">
                    {item.commentsCount}
                  </span>
                </div>
                <div className="flex items-center gap-x-1 bg-rose-50 rounded-sm">
                  <HeartIcon className="w-4 h-4 stroke-rose-600" />
                  <span className="text-xs text-rose-600">
                    {item.likesCount}
                  </span>
                </div>
                <div className="bg-blue-50 rounded-sm">
                  <BookmarkIcon className="w-4 h-4 stroke-blue-600" />
                </div>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                <span className="text-xs text-gray-400">
                  زمان مطالعه : {item.readingTime} دقیقه
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default PostList;
