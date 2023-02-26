const CommentForm = ({setComment,comment}) => {
  return (
    <form>
      <textarea
        className="focus:ring-indigo-400 p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="نظرت رو برام بنویس ..."
      ></textarea>
      <button className="mt-4 mx-auto py-3 w-full sm:w-56 bg-indigo-600 rounded-2xl text-white px-3 md:text-lg font-bold">
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
