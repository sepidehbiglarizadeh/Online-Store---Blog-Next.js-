import axios from "axios";

const PostPage = ({ post }) => {
  return <div>{post.text}</div>;
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
