import { useState } from "react";

const CommentForm = ({ postId, responseTo }) => {
  const [commentValue, setCommentValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      content: commentValue,
      postId,
      responseTo,
    };
    
  };

  return (
    <form>
      <textarea
        className="focus:ring-indigo-400 p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="نظرت رو برام بنویس ..."
      ></textarea>
      <button
        className="mt-4 mx-auto py-3 w-full sm:w-56 bg-indigo-600 rounded-2xl text-white px-3 md:text-lg font-bold"
        onClick={submitHandler}
      >
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
