import axios from "axios";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { toPersianDigits } from "@/utils/toPersianDigits";
import Link from "next/link";

const PostPage = ({ post }) => {
  return (
    <div className="bg-gray-50 h-screen">
      <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 max-w-screen-md mx-auto">
        {/* author data */}
        <div className="flex items-stretch">
          <img
            src="/images/next.jpeg"
            alt={post.author.name}
            className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white"
          />
          <div className="flex flex-col mr-4 justify-between">
            <div className="flex items-center gap-x-2">
              <span className="font-bold">{post.author.name}</span>
              <Link href={`/blogs/${post.category.englishTitle}`}>
                <span className="text-xs border border-blue-400 text-blue-400 px-2 py-1 rounded-3xl hover:bg-blue-400 hover:text-white">
                  {post.category.title}
                </span>
              </Link>
            </div>
            <span className="font-normal text-xs hidden md:block">
              {post.author.biography}
            </span>
            <div className="font-normal text-gray-400 text-sm">
              <span>
                {new Date(post.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="mx-1">&bull;</span>
              <span>
                <span>خواندن</span>
                <span>{toPersianDigits(post.readingTime)}</span>
                <span>دقیقه</span>
              </span>
            </div>
          </div>
        </div>
        {/* interactions buttons */}
        <div className="flex">
          <button>
            <LinkIcon className="w-6 h-6 hover:text-black text-gray-500 cursor-pointer" />
          </button>
          <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
            <span className="ml-1 text-xs">
              {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
            </span>
            {post.isBookmarked ? (
              <BookOpenIcon className="w-6 h-6 fill-current" />
            ) : (
              <BookmarkIcon className="w-6 h-6 stroke-current" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);
  return {
    props: {
      post: data,
    },
  };
}

// post => SSR | SSG ?
// => 1. interactions to be updated instantly?
// => 2. you need user (req) data for this page ?
