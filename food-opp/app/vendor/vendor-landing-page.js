'use client';
import Image from 'next/image';
import { useState } from 'react';

export const VendorLandingPage = () => {
  const [page, setPage] = useState('start');

  const clickStart = () => {
    setPage('ack');
  };

  const clickAck = () => {
    setPage('travel');
  };
  return (
    <div
      className='h-screen'
    >
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
<section class="text-gray-600 body-font relative h-screen">
            <div class="absolute inset-0 bg-gray-300 pt-[93px] h-screen">
                <iframe
                    width="100%"
                    height="100%"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="map"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Astoria%20Park%20public)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={{filter: "grayscale(0.2) contrast(1.2) opacity(0.8);"}}>
                    
                    </iframe>
            </div>
            <div class="container px-5 pt-56 pb-5 mx-auto flex">
                <div class="flex-row bg-white rounded-lg p-8 flex flex-col w-full mt-[43rem] md:mt-[43rem] relative z-10 shadow-md border-2 border-indigo-500">
                   
                
                <button onClick={props.setPage} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start</button>
                <p class="text-xs text-gray-500 mt-2">Clicking start will show event information</p>
                </div>
            </div>
        </section>
  );
};

export const VendorAcknowlege = (props) => {
  return (
    <section class="text-gray-600 body-font relative h-screen">
      <div class="absolute inset-0 bg-gray-300 h-screen">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=parks%20astoria+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
          style={{ filter: 'grayscale(0.2) contrast(1.2) opacity(0.8);' }}
        ></iframe>
      </div>
      <div class="container px-5 pt-72 pb-5 mx-auto flex">
        <div class="flex-row bg-white rounded-lg p-8 flex flex-col w-full mt-[31rem] md:mt-[31rem] relative z-10 shadow-md border-2 border-indigo-500">
          <div class="flex-col flex sm:flex-row mb-2">
            <h2 class="text-gray-900 text-lg mb-1 pr-2 font-medium title-font">
              Location:
            </h2>
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Astoria Park
            </h2>
          </div>
          <div class="relative">
          <div class="flex flex-row ">
              <label  class="text-gray-600 mr-1">
                Customer name:
              </label>
              <label  class="text-gray-600 mb-2 sm:ml-5">
                Joanna
              </label>
            </div>
            <div class="flex flex-row ">
              <label  class="text-gray-600 mr-1">
                Food Type:
              </label>
              <label  class="text-gray-600 sm:ml-5">
                Ice Cream
              </label>
            </div>
            
          </div>
          <div class="flex flex-col md:flex-row relative mb-2 md:justify-between ">
            <label  class="text-gray-600">
              Count: 20
            </label>
            <label
              for="message"
              class=" sm:text-left md:text-right lg:text-right text-gray-600"
            >
              Expiry Time: 2 Hrs
            </label>
          </div>
          <button
            onClick={props.setPage}
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
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
    <section class="text-gray-600 body-font relative h-screen">
      <div class="absolute inset-0 bg-gray-300 h-screen">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d114307.22746288238!2d-73.98928374186887!3d40.70349177789311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building%2C%20West%2034th%20Street%2C%20New%20York%2C%20NY!3m2!1d40.7484405!2d-73.98566439999999!4m5!1s0x89c25f5a5ba73285%3A0x6b41f887be24bcc9!2sAstoria%20Park%2C%2019%2019th%20St%2C%20Astoria%2C%20NY%2011105!3m2!1d40.7785364!2d-73.92283359999999!5e0!3m2!1sen!2sus!4v1684638844854!5m2!1sen!2sus"
          style={{ filter: 'grayscale(0.2) contrast(1.2) opacity(0.8);' }}
        ></iframe>
      </div>
      <div class="container px-5 pt-56 pb-5 mx-auto flex">
        <div class="flex-row bg-white rounded-lg p-8 flex flex-col w-full mt-[35rem] md:mt-[35rem] relative z-10 shadow-md border-2 border-indigo-500">
          <div class="flex-col flex sm:flex-row mb-2">
            <h2 class="text-gray-900 text-lg mb-1 pr-2 font-medium title-font">
              Location:
            </h2>
            <h2 class="text-gray-900 text-lg font-medium title-font">
              Astoria Park
            </h2>
          </div>
          <div class="flex flex-row ">
              <label  class="text-gray-600 mr-1">
                Event Name:
              </label>
              <label  class="text-gray-600 mb-2 sm:ml-5">
                Birthday
              </label>
            </div>
          <div class="relative">
            <div class="flex flex-row ">
              <label  class="text-gray-600 mr-1">
                Estimated Arival Time:
              </label>
              <label  class="text-gray-600 mb-2 sm:ml-5">
                30 minutes
              </label>
            </div>

            <div class="flex flex-row ">
              <label  class="text-gray-600 mr-1">
                People:
              </label>
              <label  class="text-gray-600 mb-2 sm:ml-5">
                20
              </label>
            
            </div>

            <div class="flex flex-row ">
              <label  class="text-gray-600 mr-1">
                Notes:
              </label>
              <label  class="text-gray-600 mb-5 sm:ml-5">
                Birthday party for kids at the park
              </label>
            </div>

            <label  class="text-gray-600">
                Push notification has been sent to the customer
            </label>
          </div>
      
        </div>
      </div>
    </section>
  );
};
