import { ImFacebook, ImTwitter,ImYoutube } from "react-icons/im";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" placeholder="search" className="input-text"/>
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"} className="font-bold text-2xl">Blogger</Link>
            </div>
            <div className="w-96 order-3 flex justify-center gap-6">
                <Link href={"/"}><ImFacebook color="#888" /></Link>
                <Link href={"/"}><ImTwitter color="#888" /></Link>
                <Link href={"/"}><ImYoutube color="#888" /></Link>
            </div>
        </div>

    </header>
    );
}
