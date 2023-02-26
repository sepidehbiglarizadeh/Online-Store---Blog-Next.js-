import { Fragment, useState } from "react";
import CommentForm from "./CommentForm";
import SingleComment from "./SingleComment";

const PostComments = ({ post }) => {
  const [commentValue, setCommentValue] = useState("");

  return (
    <div>
      <h2>نظرات</h2>
      {post.comments.map((comment, index) => {
        return !comment.responseTo && comment.status === 2 && <Fragment key={comment._id}>
          <SingleComment comment={comment} />
        </Fragment>
        
      })}

      {/* base comment form */}
      <div className="mt-8">
        <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
        <CommentForm comment={commentValue} setComment={setCommentValue} />
      </div>
    </div>
  );
};

export default PostComments;
