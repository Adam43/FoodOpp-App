'use client';
import Image from 'next/image';
import { useState } from 'react';

export const VendorLandingPage = () => {
  return (
    <div>
      <MapComponent />
      <DescriptionComponent />
    </div>
  );
};

export const MapComponent = () => {
  const [mapClicked, setMapClicked] = useState(false);

  const mapClickedHandler = () => {
    setMapClicked(!mapClicked);
  };

  return (
    <>
      <Image
        src={mapClicked ? '/map_image_1.png' : '/map_image_2.png'}
        alt="Vercel Logo"
        className="dark:invert"
        width={200}
        height={300}
        onClick={mapClickedHandler}
        priority
      />
    </>
  );
};

export const DescriptionComponent = () => {
  return (
    <div className="text-white bg-green-700">
      <h1>Currently clicked name</h1>
      <p>Address: </p>
      <p>Request type: </p>
      <p>Request count</p>
      <p>Expiry: </p>
      <button className="text-white bg-green-700 rounded-full">Button</button>
    </div>
  );
};
