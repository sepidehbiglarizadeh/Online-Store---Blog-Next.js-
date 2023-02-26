import { Fragment, useState } from "react";
import SingleComment from "./SingleComment";

const PostComments = ({ post }) => {
  const [comment, setComment] = useState("");

  return (
    <div>
      <h2>نظرات</h2>
      {post.comments.map((comment, index) => {
        return !comment.responseTo && comment.status === 2 && <Fragment key={comment._id}>
          <SingleComment comment={comment} />
        </Fragment>
        
      })}

      {/* base comment form */}
      <form className="mt-8">
        <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
        <textarea
          className="focus:ring-indigo-400 p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="نظرت رو برام بنویس ..."
        ></textarea>
        <button className="mt-4 mx-auto py-4 w-full sm:w-56 bg-indigo-600 rounded-xl text-white px-3 md:text font-bold">
          ارسال نظر
        </button>
      </form>
    </div>
  );
};

export default PostComments;
