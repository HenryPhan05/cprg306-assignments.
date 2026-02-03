import NewItem from "./new-item";
import Link from "next/link";
function Page() {
  return (
    <>
      <div className="bg-white">
        <NewItem />
        <Link className="mt-3 p-3 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px" href="/" >Home page</Link>
      </div>
    </>
  );
}
export default Page;