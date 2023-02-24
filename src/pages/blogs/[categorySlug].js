import axios from "axios";
import PostList from "@/components/posts/PostList";
import MobileCategory from "@/components/posts/MobileCategory";
import SortBar from "@/components/posts/SortBar";
import DesktopCategory from "@/components/posts/DesktopCategory";
import queryString from "query-string";

export default function CategoryPage({ blogsData, postCategories }) {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <MobileCategory postCategories={postCategories} />
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]  min-h-screen">
          <div className="hidden md:block md:row-span-2 md:col-span-3">
            <DesktopCategory postCategories={postCategories} />
          </div>
          <div className="hidden md:block md:col-span-9">
            <SortBar />
          </div>
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            <PostList blogsData={blogsData} />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data } = result;
  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data,
    },
  };
}
