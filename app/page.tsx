import { Card, CardContent} from '@/components/ui/card'
import { simpleBlogCard } from './lib/interface'
import { Button } from '@/components/ui/button'
import { client, urlFor } from './lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug" : slug.current,
    titleImage
}`

  const data = await client.fetch(query)
  return data
}

async function Home() {
  const data: simpleBlogCard[] = await getData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, index) => (
        <Card key={index}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt="Imagen"
            width={500}
            height={500}
            className='roundex-t-lg h-[200px] object-cover'
          />
          <CardContent className='mt-5'>
            <h3 className='text-lg line-clamp-2 font-bold'>{post.title}</h3>
            <p className='line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-400'>{post.smallDescription}</p>
            <Button asChild className='w-full mt-7'>
          <Link href={`/blog/${post.currentSlug}`}>Read more</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Home
