import {} from 'react';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

export default function Cardcomponent({
  name,
  status,
  createdAt,
  expiresAt,
  groupSize,
  type,
  notes,
}) {
  return (
    <div className="flex justify-center mt-30  px-5">
      <div className="bg-[#e0e2e3] w-full md:w-[600px] max-h-96 h-fit border-2 border-black rounded-2xl p-4 md:flex-row justify-between">
        <div className="flex mt-5 justify-between ">
          <div className='flex-col flex'>
          <h1 className="font-bold text-2xl">{name}new york</h1>

          <a href="" className="text-blue-600 hover:underline">
          Maps link
        </a>
        </div>

          <div className="flex items-center justify-end ">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                clipRule="evenodd"
              />
            </svg>

            <h1 className=" border border-black text-xs flex sqaure-full">
              {expiresAt}
              Expires in 2 hours
            </h1>
            <button
              className="bg-red-600 text-white text-2xl px-7 hover:bg-[#f26a6a] border border-black rounded"
              // onClick={deleteEvent()}
            >
              x
            </button>
          </div>
        </div>

        

        <div className="flex flex-row md:flex-row mt-10 px-3 justify-between">
          <div>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
            </svg>

            <h1>{groupSize}</h1>
          </div>

          <div>
            <h1 className="font-bold">Type</h1>
            <p className="text-sm ">{type}birthaday party</p>
          </div>

          <div className="flex">
            <ChatBubbleBottomCenterTextIcon className='h-6 w-6'/>

            <div>
              <h1 className="font-bold">Notes</h1>
              <p className="text-sm">{notes}for saturday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
