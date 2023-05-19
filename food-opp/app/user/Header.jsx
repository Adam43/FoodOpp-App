import {} from 'react';
import Image from 'next/image';
import Logo from 'public/logo.svg';

export default function Header() {
  // const result = await

  const userName = 'Bob';

  return (
    <header className="text-gray-600 flex flex-wrap self-center border border-red-300 w-full bg-purple-900 p-0!">
      <div className="container mx-1 flex flex-wrap p-1 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0"></a>
        <div name="logo" className="flex ">
          <Image src={Logo} alt="FoodOpp Logo" />
        </div>
        <h1 className="px-3 m-2 text-white font-bold">Hello, {userName}</h1>
      </div>
    </header>
  );
}

//create new request
