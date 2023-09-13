import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Blogger</title>
        </Head>

        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
