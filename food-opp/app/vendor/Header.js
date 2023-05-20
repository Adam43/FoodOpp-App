import {} from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="text-gray-600 flex justify-between w-full bg-gray-800 p-0!">
      <div className="container mx-auto flex flex-wrap p-5 flex-row ">
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
        <nav className="flex flex-wrap items-center text-base justify-between text-gray-100 font-bold">
          <h1 className="px-3 m-2 text-white items-center font-bold">
            Hello, Paletero Inc.
          </h1>
        </nav>
        <div></div>
      </div>
    </header>
  );
}

//create new request
