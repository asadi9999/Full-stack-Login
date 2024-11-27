import Link from 'next/link';
import '../app/style/style.css'

function Header() {
  return (
    <>
      <ul className=' flex justify-center items-center gap-12 bg-[#2d2e2f] p-4 text-xl w-full h-20'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>

    </>


  );
}

export default Header;
