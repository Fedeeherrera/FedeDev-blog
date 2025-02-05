import Link from 'next/link'

function NavBar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto py-5 px-4">
      <Link href="/" className="text-2xl font-bold">
        Fede<span className="text-primary">Dev</span>
      </Link>



    </nav>
  )
}
export default NavBar
