import {} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Caret from 'next/image'; //Having issues with the imag imports

export default function Header() {
  // const result = await

  const userName = 'Bob';

  return (
    <header className="text-gray-600 flex flex-wrap self-center w-full bg-gray-800 p-0!">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
        <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0"></a>
        <div name="logo" className="flex self-center">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>

        {/*Menu*/}
        <nav className=" flex flex-wrap items-center text-base justify-center text-gray-100 font-bold">
          <h1 className="px-3 m-2 text-white items-center font-bold">Hello, {userName}!</h1>
          <ul className="hidden md:flex nav-pink">

            <a className="hover:text-blue-500 justify-right">
              <li>Home</li>
            </a>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}

//create new request
