'use client';

import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { UserCircleIcon, TruckIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    // q: What does this styling do?
    // a: It makes the main element a flexbox with a minimum height of the screen
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 bg-[#ffff0043]">
  
  {/*Profile */}
  <UserCircleIcon className='w-60 text-[#ED9664]'/>

  {/*Buttons */}
      <div className="flex-col gap-4 w-full">
        <Link
          href="/user"
          className="flex justify-center items-center w-full h-[100px]"
        >
          <Button className="w-full h-[3.5em] text-2xl mb-15">User page</Button>
        </Link>
        <div className='h-[2em]'></div>

    {/* Horizontal Line */}
        <p className='border-2 border-black w-full'></p>

  {/*Profile */}
  <TruckIcon className='w-[15em] text-green-500 mr-4'/>
        <Link
          href="/vendor"
          className="flex justify-center items-center w-full h-[100px]"
        >
        <div className=''>
          <Button className="w-full h-[3.5em] text-2xl mb-15">Vendor page</Button>
        </div>
        </Link>
      </div>
    </main>
  );
}
