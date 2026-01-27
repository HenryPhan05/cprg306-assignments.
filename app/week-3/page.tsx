import Item from "./item";
import ItemList from "./item-list";
import tailwindcss from "@tailwindcss/vite";
function Page() {
  return (
    <>
      <main className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="text-5xl font-bold mb-10 mt-5 ">Shopping List</h1>
          <ItemList />
        </div>


        <a
          className=" mb-10 text-1xl p-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] "
          href="/"

          rel="noopener noreferrer"
        >


          Home Page      </a>

        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/week-2"

          rel="noopener noreferrer"
        >

          week-2
        </a>
      </main>

    </>
  );
}
export default Page;