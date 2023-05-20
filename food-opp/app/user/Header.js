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
        <div
          name="profile-pic"
          className="h-20 w-20 border border-black rounded-full"
        ></div>
        {/* <img src={"../images/caret.png"} /> */}
        <h1 className="px-3 m-2 text-white font-bold">Hello, {userName}!</h1>
        {/*Menu*/}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-gray-100 font-bold">
          <ul className="hidden md:flex nav-pink">
            <a className="mr-5 hover:text-blue-500">
              <li>First Link</li>
            </a>
            <a className="mr-5 hover:text-blue-500">
              <li>Second Link</li>
            </a>
            <a className="mr-5 hover:text-blue-500">
              <li>Third Link</li>
            </a>
            <a className="mr-5 hover:text-blue-500">
              <li>Fourth Link</li>
            </a>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
}

//create new request
