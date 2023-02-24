const PostPage = () => {
  return ( 
    <div>post page</div>
   );
}
 
export default PostPage;

export async function getServerSideProps(context) {
  const {query}= context;
  console.log(context);
}