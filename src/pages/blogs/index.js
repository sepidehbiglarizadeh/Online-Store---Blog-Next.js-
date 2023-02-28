import axios from "axios";
import PostList from "@/components/posts/PostList";
import MobileCategory from "@/components/posts/MobileCategory";
import SortBar from "@/components/posts/SortBar";
import DesktopCategory from "@/components/posts/DesktopCategory";
import http from "@/services/httpService";
import queryString from "query-string";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";

export default function BlogPage({ blogsData, postCategories }) {
  const router = useRouter();

  const pageHandler = (e, page) => {
    router.query.page = page;
    routerPush(router);
  };

  return (
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
          <PostList blogsData={blogsData.docs} />
          <div className=" col-span-6 flex justify-center" dir="ltr">
            {blogsData.page > 1 && (
              <Pagination
                count={blogsData.totalPages}
                page={blogsData.page}
                color="primary"
                onChange={pageHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );
  const { data: postCategories } = await http.get("/post-category");
  const { data } = result;

  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data,
    },
  };
}
