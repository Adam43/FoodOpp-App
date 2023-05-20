'use client';
import Image from 'next/image';
import { useState } from 'react';


export const VendorLandingPage = () => {
  const [page, setPage] = useState("start")
  console.log("-----------", page)

  const clickStart = () => {
    console.log("-----onclick clicked")
    setPage("ack");
  }

  const clickAck = () => {
    console.log("-----onclick clicked")
    setPage("travel");
  }
  return (
    <div>
      { page==="start" ?
          <VendorStart setPage={clickStart}/>
        :
        page==="ack" ?
          <VendorAcknowlege setPage={clickAck}/>
        :
        page==="travel" ?
          <VendorTravel/>
        :
          <VendorStart setPage={clickStart}/>
      }
    </div>
  );
};



export const VendorStart = (props) => {
  return (
<section class="text-gray-600 body-font relative">
            <div class="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="map"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=astoria+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                    style={{filter: "grayscale(0.2) contrast(1.2) opacity(0.8);"}}>
                    
                    </iframe>
            </div>
            <div class="container px-5 pt-56 pb-5 mx-auto flex">
                <div class="flex-row bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
                   
                
                <button onClick={props.setPage} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start</button>
                <p class="text-xs text-gray-500 mt-2">Clicking Acknowledge will start travel directions and send a time estimate to customers</p>
                </div>
            </div>
        </section>
  );
};

export const VendorAcknowlege = (props) => {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=astoria+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: 'grayscale(0.2) contrast(1.2) opacity(0.8);' }}
        ></iframe>
      </div>
      <div class="container px-5 pt-56 pb-5 mx-auto flex">
        <div class="flex-row bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div class="flex-col flex sm:flex-row mb-2">
            <h2 class="text-gray-900 text-lg mb-1 pr-2 font-medium title-font">
              Location:
            </h2>
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              1298 Park Ave, New York, NY 10201
            </h2>
          </div>
          <div class="relative">
            <div class="flex flex-row ">
              <label for="email" class="text-gray-600 mr-1">
                Food Type:
              </label>
              <label for="email" class="text-gray-600 sm:ml-5">
                Ice Cream
              </label>
            </div>
          </div>
          <div class="flex flex-col md:flex-row relative mb-2 md:justify-between ">
            <label for="message" class="text-gray-600">
              Count: 34
            </label>
            <label
              for="message"
              class=" sm:text-left md:text-right lg:text-right text-gray-600"
            >
              Expiry Time: 2 Hrs
            </label>
          </div>
          <button onClick={props.setPage} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Acknowledge
          </button>
          <p class="text-xs text-gray-500 mt-2">
            Clicking Acknowledge will start travel directions and send a time
            estimate to customers
          </p>
        </div>
      </div>
    </section>
  );
};


export const VendorTravel = (props) => {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=astoria+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: 'grayscale(0.2) contrast(1.2) opacity(0.8);' }}
        ></iframe>
      </div>
      <div class="container px-5 pt-56 pb-5 mx-auto flex">
        <div class="flex-row bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div class="flex-col flex sm:flex-row mb-2">
            <h2 class="text-gray-900 text-lg mb-1 pr-2 font-medium title-font">
              Location:
            </h2>
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              1298 Park Ave, New York, NY 10201
            </h2>
          </div>
          <div class="relative">
            <div class="flex flex-row ">
              <label for="email" class="text-gray-600 mr-1">
                Food Type:
              </label>
              <label for="email" class="text-gray-600 sm:ml-5">
                Ice Cream
              </label>
            </div>
          </div>
          <div class="flex flex-col md:flex-row relative mb-2 md:justify-between ">
            <label for="message" class="text-gray-600">
              Count: 34
            </label>
            <label
              for="message"
              class=" sm:text-left md:text-right lg:text-right text-gray-600"
            >
              Expiry Time: 2 Hrs
            </label>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Travel
          </button>
          <p class="text-xs text-gray-500 mt-2">
            Clicking Acknowledge will start travel directions and send a time
            estimate to customers
          </p>
        </div>
      </div>
    </section>
  );
};
