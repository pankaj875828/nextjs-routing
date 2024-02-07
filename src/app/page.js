import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <br />
      <Link href='/login'>Login Page</Link><br /><br />
      <Link href='/about'>About Page</Link>
    </main>
  );
}
