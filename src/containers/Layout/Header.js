import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-2 mb-8 px-4 md:px-0">
      <div className="container mx-auto xl:max-w-screen-xl">
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/" className="py-2 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="py-2 block">
                Blogs
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            <Link href="/profile" className="py-2 block">
              Profile
            </Link>
            <Link href="/signup" className="py-2 block">
              ثبت نام
            </Link>
            <Link href="/signin" className="py-2 block">
              ورود
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
