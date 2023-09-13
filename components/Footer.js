import { ImFacebook, ImTwitter,ImYoutube } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className='bg-gray-50'>
      <Newsletter />
      <div className='container mx-auto flex justify-center py-12'>
        <div className='py-5'>
          <div className='flex justify-center gap-6'>
          <Link href={"/"}><ImFacebook color="#888"/></Link>
                <Link href={"/"}><ImTwitter color="#888"/></Link>
                <Link href={"/"}><ImYoutube color="#888"/></Link>
          </div>

          <p className="text-gray-400 py-5">Copyright © 2023 All rights reserved | This template is made with by Blogger</p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
    )
}
