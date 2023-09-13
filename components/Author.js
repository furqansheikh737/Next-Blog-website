import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Author = () => {
  return (
    <div className='author flex py-2'>
        <Image src={"/Images/img02.png"} width={50} height={40} className='rounded-full'></Image>
        <div className='flex flex-col justify-center px-4'>
            <Link className="text-md font-bold text-gray-600" href={"/"}>Furqan sheikh</Link>
            <span className='text-sm text-gray-500'>CEO and Founder</span>
        </div>
    </div>
  )
}

export default Author