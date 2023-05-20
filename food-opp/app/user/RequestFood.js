import Link from 'next/link';

export default function RequestFood() {
  return (
    <div className="mx-1 flex flex-wrap p-1 flex-col md:flex-row items-center">
      <div className="w-[300px] flex flex-row justify-center">
        <Link href="/user/new-request">
          <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0 flex-wrap text-white h-12">
            Request a Food Truck
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
