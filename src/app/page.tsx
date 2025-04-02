import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href={'/documents/123'}>Click here to go at editor page </Link>
    </div>
  )
}
