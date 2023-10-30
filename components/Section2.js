import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import fetcher from "@/lib/fetcher";
const Section2 = () => {
  const { data, isLoading, isError } = fetcher('api/posts/');
  if (data) console.log(data)
  if (isLoading) return <div>Loading...</div>
  console.log(isLoading)
  if (isError) return <div>Error</div>
  console.log(isError)


  return (
    <section className='container mx-auto md:py-7 px-10'>
      <h1 className='text-4xl font-bold text-center py-10'>Latest Post</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {
          data.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))
        }
      </div>

    </section>
  )
}

function Post({ data }) {
  const { id, category, img, published, title, author } = data;
  return (
    <div className='item'>
      <div className='images'>
        <Link href={"/posts/page"}>
          <Image src={img || '/'} className="rounded" width={450} height={350} alt="Picture of the author" />
        </Link>
      </div>
      <div className='info flex justify-center flex-col py-4'>
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-700">
            {category || 'Unknown'}
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            {published || 'Unknown'}
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-xl md:text-xl font-bold text-gray-800 hover:text-gray-700"
          >
            {title || 'Title'}
          </Link>
          <p className="text-gray-500 py-2">
            Even the all-powerful pointing has no control about the text by the
            name of lorem ipsum decided to leave for. Even the all-powerful
            pointing has no control about the text by the name of lorem ipsum
            decided to leave for.
          </p>
          {author ? <Author /> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Section2