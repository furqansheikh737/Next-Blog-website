import Author from "@/components/Author"
import Related from "@/components/Related"
import Layout from "@/layout/Layout"
import Image from "next/image"


const page = () => {
  return (
    <Layout>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
          <div className="flex justify-center">
            <Author />
          </div>
          <div className="post py-10">
             <h1 className="text-4xl font-bold text-center pb-5">You most unhappy costumers are your greatest source of learning</h1>
             <p className="text-gray-500 text-center text-xl">Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for. Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for.</p>
             <div className="py-10">
                <Image src={"/Images/img05.jpg"} width={900} height={600}></Image>
             </div>
             <div className="content text-gray-600 lg:flex flex-col gap-4">
                 <p>Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for. Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for.</p>
                 <p>Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for. Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for.</p>
                 <p>Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for. Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for.</p>
                 <p>Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for. Even the all-powerful pointing has no control about the text by the name of lorem ipsum decided to leave for.</p>
             </div>
          </div>
          <Related />
        </section>
    </Layout>
    )
}

export default page