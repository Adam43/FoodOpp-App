import {} from 'react';

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
      <div className="bg-[#e0e2e3] w-full md:w-[600px] h-[200px] border-2 border-black rounded-2xl p-4 md:flex-row justify-between">
        <div className="flex mt-5 justify-between ">
          <h1 className="font-bold text-2xl">{name}new york</h1>

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

        {/* <a href="" className="text-blue-600 hover:underline px-10">
          Maps link
        </a> */}

        <div className="flex flex-row md:flex-row mt-10 h-screen px-3 justify-between">
          <div>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
            </svg>

            <h1>{groupSize}</h1>
          </div>

          <div>
            <h1 className="font-bold">Type</h1>
            <p className='text-sm '>{type}birthaday party</p>
          </div>

          <div className='flex'>
            <svg
              
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
            </svg>
            
            <div>
            <h1 className="font-bold">Notes</h1>
            <p className='text-sm'>{notes}for saturday</p>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
