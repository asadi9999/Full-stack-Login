import Link from 'next/link';
import './style.css'

function Header1() {
  return (
    <>
      <ul className=' flex flex-col justify-center items-center gap-12 bg-[#2d2e2f] p-4 text-xl w-full h-40'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>

    </>


  );
}

export default Header1;
