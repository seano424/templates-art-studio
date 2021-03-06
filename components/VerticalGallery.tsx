import Image from 'next/image'
import Link from 'next/link'

const fakeImages = [
  {
    url: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Aspen Mountain Retreat',
    link: '/',
  },
  {
    url: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    title: 'The Roads',
    link: '/',
  },
  {
    url: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Sound Shore',
    link: '/',
  },
  {
    url: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Aspen Mountain Retreat',
    link: '/',
  },
  {
    url: 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Aspen Mountain Retreat',
    link: '/',
  },
]

interface Props {
  images?: {
    title: string
    url: string
    link: string
  }[]
}

export default function VerticalGallery(props: Props) {
  const { images = fakeImages } = props
  return (
    <section>
      {images.map((image, i) => (
        <Link key={i} href={image.link}>
          <a className="flex relative aspect-[1.8] cursor-pointer mx-5 my-20 sm:mx-20">
            <Image
              className="object-cover object-center"
              src={image.url}
              alt="Image for Section"
              layout="fill"
            />
            <h2 className="hidden h2 absolute pl-20 inset-0 items-center text-white sm:flex">
              {image.title}
            </h2>
          </a>
        </Link>
      ))}
    </section>
  )
}
