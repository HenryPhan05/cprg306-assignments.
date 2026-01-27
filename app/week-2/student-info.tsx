import Link from "next/link";
export default function StudentInfo() {
  return (
    <>
      <h1>Phan Cao Thanh Vinh </h1>

      <Link
        href="https://github.com/HenryPhan05/lab1Webdev2.git"
        target="_blank"
        rel="my repository"
      >
        My Repository
      </Link>
    </>
  );
}