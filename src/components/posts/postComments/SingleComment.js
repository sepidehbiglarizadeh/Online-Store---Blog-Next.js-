import toLocalDate from "@/utils/toLocalDate";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SingleComment = ({ comment }) => {
  const [onReply, setOnReply] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  return (
    <div className="border border-gray-500 rounded p-2 md:p-4">
      <div className="flex gap-x-4">
        <UserIcon className="h-10 w-10" />
        <div className="flex flex-col justify-between">
          <span>{comment.writer?.name}</span>
          <span>{toLocalDate(comment.createdAt)}</span>
        </div>
      </div>
      <div>{comment.content}</div>
      <button onClick={() => setOnReply(!onReply)}>
        {onReply ? "بیخیال" : "پاسخ به"}
      </button>

      {onReply && (
        <form className="mt-8">
          <span className="font-bold md:text-lg">
            در حال پاسخ به {comment.writer?.name}
          </span>
          <textarea
            className="focus:ring-indigo-400 p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            placeholder="نظرت رو برام بنویس ..."
          ></textarea>
          <button className="mt-4 mx-auto py-4 w-full sm:w-56 bg-indigo-600 rounded-xl text-white px-3 md:text font-bold">
            ارسال نظر
          </button>
        </form>
      )}
    </div>
  );
};

export default SingleComment;
