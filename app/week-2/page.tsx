import Link from "next/link";
import StudentInfo from "./student-info";
import tailwindcss from "@tailwindcss/vite";
export default function Page() {
  return (
    <>
      <main>
        <div className="mb-10">
          <h1>Week 2 Assignment</h1>
          <h1>Shopping List </h1>
          <StudentInfo></StudentInfo>
          <br />
          <br />
          <br />
          <Link className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" href="/" >Home page</Link>
        </div>
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/week-3"

          rel="noopener noreferrer"
        >
          week-2
        </a>
      </main >
    </>
  );
}
