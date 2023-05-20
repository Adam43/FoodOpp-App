import {} from 'react';
import Link from 'next/link';
// import Logo from "../images/logo.png" //Having issues with the imag imports
import Caret from 'next/image'; //Having issues with the imag imports
import Image from 'next/image';

export default function Header() {
  // const result = await

  const userName = 'Bob';

  return (
    <header className="bg-white w-full">
      <div className="container mx-auto flex flex-row items-center">
        <h1 className="px-3 m-2 text-4xl self-start">Hi {userName}</h1>
        {/* Commenting out until we get a better logo */}
        {/* <div name="logo" className="flex self-center">
          <Image src="/logo.png" alt="FoodOpp Logo" width="64" height="64" />
        </div> */}
      </div>
    </header>
  );
}

//create new request

//   name="profile-pic"
//   className="h-20 w-20 border border-black rounded-full"
// ></div>
