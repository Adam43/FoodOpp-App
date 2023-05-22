import {} from 'react';
import Link from 'next/link';
// import Logo from "../images/logo.png" //Having issues with the imag imports
import Image from 'next/image';

export default function Header() {
  const userName = 'Joanna';

  return (
    <header className="w-full pt-12 px-12 bg-[#ffff0054]">
      <div className="container mx-auto flex flex-row items-center">
        <div className="flex flex-col">
          <div className="px-3 m-2 text-3xl self-start font-bold">Hi {userName},</div>
          {/* <div className="px-3 m-2 text-2xl self-start">What&apos;s on your mind?</div> */}
          <div className="px-3 m-2 text-2xl self-start">
            What food truck do you need?
          </div>
        </div>
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
