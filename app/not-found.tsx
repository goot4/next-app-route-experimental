import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={"mx-2"}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>This is the app level not found page.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}