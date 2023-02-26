const PostComments = ({ post }) => {
  return (
    <div>
      <h2>نظرات</h2>
      {post.comments.map((comment, index) => {
        !comment.responseTo && comment.status === 2;
        return <div></div>;
      })}

      {/* base comment form */}
      <form>
        <h3>ارسال نظر جدید</h3>
        <textarea name="" id=""></textarea>
      </form>
    </div>
  );
};

export default PostComments;
