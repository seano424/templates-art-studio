import Link from 'next/link'
interface Props {
  title?: string
}

export default function Navbar(props: Props) {
  const { title } = props
  return (
    <nav>
      <Link href="/">
        <a className="fixed right-10 top-10 z-20 sm:text-2xl tracking-widest uppercase text-primary">
          {title}
        </a>
      </Link>
    </nav>
  )
}
