import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" flex flex-1 justify-between py-4 px-40 bg-slate-50">
      <div>
        <h1 className=" text-lg  font-semibold">Taks</h1>
      </div>
      <div className=" flex">
        <ul className=" flex flex-row gap-4  font-semibold">
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            {" "}
            <Link href="/abouts">About</Link>
          </li>
          <li>
            {" "}
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
