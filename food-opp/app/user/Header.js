import {} from 'react';
import Link from 'next/link';
// import Logo from "../images/logo.png" //Having issues with the imag imports
import Caret from 'next/image'; //Having issues with the imag imports

export default function Header() {
  // const result = await

  const userName = 'Bob';

  return (
    <header className="text-gray-600 flex flex-wrap self-center w-full bg-gray-800 p-0!">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
        <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0"></a>
        <div name="logo" className="flex self-center">
          {/* <img src={Logo} alt="FoodOpp Logo" /> */}
        </div>
        {/* <img src={"../images/caret.png"} /> */}
        <h1 className="px-3 m-2 text-white font-bold text-4xl">Hello, {userName}!</h1>
        <div></div>
      </div>
    </header>
  );
}

//create new request


        //   name="profile-pic"
        //   className="h-20 w-20 border border-black rounded-full"
        // ></div>