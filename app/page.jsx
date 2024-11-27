import Image from "next/image";
import '../app/globals.css'
export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>home page</h1>
          <div className=" bg-[#212223] px-3 py-2 rounded-md">
            <p className=" text-2xl text-white/40">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit excepturi et minus perferendis, vitae at dignissimos unde fugit doloremque.
            </p>
          </div>
        </main>

      </div>
    </>

  );
}
