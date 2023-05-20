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
    <div className="flex justify-center mt-40 h-screen px-5">
      <div className="bg-[#a9d4ff] w-full md:w-64 h-80 rounded-2xl p-4 md:flex-row justify-between">
        <div className="flex flex-row md:flex-row px-5 mt-5">
          <h1 className="font-bold text-2xl border">{name}</h1>

          <div className="flex items-center ml-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <h1 className="ml-2 text-xs flex sqaure-full  w-[130px] items-center">
              Searching for a truck. Expires in 2 hours
            </h1>
          </div>
          <div className="flex flex-row ml-10">
            <button
              className="bg-[#78b5f3] text-white px-5 hover:bg-[#8fc1f7] border border-black rounded mr-2"
              // onClick={}
            >
              Edit
            </button>
            <button
              className="bg-red-600 text-white text-2xl px-7 hover:bg-[#f26a6a] border border-black rounded"
              // onClick={deleteEvent()}
            >
              x
            </button>
          </div>
        </div>

        <a href="" className="text-blue-600 hover:underline px-10">
          Maps link
        </a>

        <div className="flex flex-row md:flex-row mt-10 h-screen px-5 justify-between">
          <div>
            <h1>People</h1>
          </div>

          <div>
            <h1 className="ml-5">Type</h1>
          </div>

          <div>
            <h1 className="ml-5">Notes</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
