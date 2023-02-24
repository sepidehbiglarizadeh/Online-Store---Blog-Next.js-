import Link from "next/link";

const HomePage = () => {
  return ( 
    <div>This is Home Page
      <Link href="/blogs">Go to blogs page</Link>
    </div>
   );
}
 
export default HomePage;