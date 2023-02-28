import { Fragment } from "react";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";
import SingleComment from "./SingleComment";

const PostComments = ({ post }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">نظرات</h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <Fragment key={comment._id}>
              <SingleComment comment={comment} postId={post._id} />
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
                postId={post._id}
              />
            </Fragment>
          )
        );
      })}

      {/* base comment form */}
      <div className="mt-8">
        <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
        <CommentForm postId={post._id} responseTo={null} />
      </div>
    </div>
  );
};

export default PostComments;
