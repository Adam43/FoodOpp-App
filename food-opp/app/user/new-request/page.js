'use client';

import Link from 'next/link';
import { Card, Typography, Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import moment from 'moment';
import { addEventEndpoint } from '@/src/consts/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const NewRequest = ({}) => {
  const [name, setName] = useState('');
  const [crowdEstimate, setCrowdEstimate] = useState(0);
  const [foodType, setFoodType] = useState('');
  const [eventDuration, setEventDuration] = useState('15');
  const [notes, setNotes] = useState('');
  const [location, setLocation] = useState('');

  const router = useRouter();

  const handleSend = async (event) => {
    event.preventDefault();

    const requestBody = {
      description: notes,
      'expiry-time-in-millis': moment()
        .add(parseInt(eventDuration), 'm')
        .valueOf(),
      'food-type': foodType,
      landmark: '',
      location,
      'num-people': crowdEstimate,
      'created-at-in-millis': moment().valueOf(),
      upvotes: 0,
    };

    try {
      const result = await fetch(addEventEndpoint, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await result.json();
      console.log('event created successfully');
      toast.success(`${name} event requested!`);
      router.push('/user');
    } catch (error) {
      toast.error(
        `Could not create event due to error: ${JSON.stringify(error)}`
      );
    }
  };

  return (
    <div className="flex flex-col p-4 w-full items-center">
      <Toaster />
      <Card color="transparent" shadow={false}>
        <div className="flex">
          <Link href="/user" className="w-6 h-6 mr-auto">
            <ArrowLeftIcon />
          </Link>
          <Typography className="mx-auto" variant="h4" color="blue-gray">
            Create New Request
          </Typography>
        </div>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your event details
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSend}
        >
          <div className="mb-4 flex flex-col gap-6">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="border-2 border-black"
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="location">Location</label>
            <input
              id="location"
              className="border-2 border-black"
              type="text"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <label htmlFor="crowd-estimate">Crowd Estimate</label>
            <input
              id="crowd-estimate"
              className="border-2 border-black"
              type="number"
              name="crowd-estimate"
              value={crowdEstimate}
              onChange={(event) => setCrowdEstimate(event.target.value)}
            />
            <label htmlFor="food-type">Food type</label>
            <input
              id="food-type"
              className="border-2 border-black"
              type="text"
              name="food-type"
              value={foodType}
              onChange={(event) => setFoodType(event.target.value)}
            />
            <label htmlFor="event-duration">Event duration</label>
            <select
              id="event-duration"
              name="event-duration"
              value={eventDuration}
              onChange={(event) => setEventDuration(event.target.value)}
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
              <option value="120">120 minutes</option>
            </select>
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              className="border-2 border-black"
              name="notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
            <input
              type="submit"
              value="REQUEST"
              className="border bg-blue-500 text-white rounded-lg py-2"
            />{' '}
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have a request?{' '}
            <Link
              href="/user"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Edit one of your existing requests
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default NewRequest;
