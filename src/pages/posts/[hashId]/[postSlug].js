import axios from "axios";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { toPersianDigits } from "@/utils/toPersianDigits";
import Link from "next/link";
import PostInteraction from "@/components/posts/PostInteraction";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const PostPage = ({ post }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="md:max-w-screen-md container mx-auto">
        <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 mx-auto">
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
        <main className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl prose-h1:font-bold prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-bold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10 prose-img:rounded-xl prose-a:text-blue-500 mb-8">
          <h1>{post.title}</h1>
          <h2>عنوان اول تستی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <img src={post.coverImage} alt="" />
          <h2>عنوان تستی دوم</h2>
          <p>
            بدون استفاده از <a href="https://highlightjs.org">highlight.js</a>{" "}
            میتوان به سادگی کدها را داخل محتوی بلاگ ها قرار داد!
          </p>
          <p>
            به عنوان مثال برای کانفیگ تیلویند باید از فایل{" "}
            <code>tailwind.config.js</code> استفاده کرد
          </p>
          <pre dir="ltr">
            {`module.exports = {
              purge:[],
              theme:{
                extend:{}
              },
              variants:{},
              plugins:[],
            }`}
          </pre>
        </main>

        {/* post tags like-bookmark */}
        <section>
          <ul className="flex items-center flex-wrap gap-x-4 mb-6">
            {["فرانت اند", "جاوااسکریپت", "ریکت", "Next.js"].map(
              (tag, index) => {
                return (
                  <li
                    key={index}
                    className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all cursor-pointer text-gray-600 text-sm mb-3 block"
                  >
                    {tag}
                  </li>
                );
              }
            )}
          </ul>
          {/* like-comment-bookmark */}
          <div className="flex items-center flex-col gap-y-8 md:flex-row md:justify-between">
            <PostInteraction item={post} className="justify-evenly w-full md:w-auto" />
            {/* share btns */}
            <div className="flex items-center md:gap-x-4 gap-x-3 w-full md:w-auto text-2xl justify-evenly">
              <a href="" target="_blank" className="block" rel="noreferrer">
                <IoLogoLinkedin className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer" />
              </a>
              <a href="" target="_blank" className="block" rel="noreferrer">
                <IoLogoTwitter className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer" />
              </a>
              <a href="" target="_blank" className="block" rel="noreferrer">
                <FaTelegram className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </section>
      </div>
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
