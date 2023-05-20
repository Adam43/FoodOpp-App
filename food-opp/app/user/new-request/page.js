'use client';

import Link from 'next/link';
import { Card, Typography, Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import moment from 'moment';
import { addEventEndpoint } from '@/src/consts/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const NewRequest = ({ }) => {
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

      if (!result.ok) {
        toast.error(`Could not create event`);
        return;
      }

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
      <Card color="transparent" shadow={false}>
        <div className="flex items-center">
          <Link href="/user" className="w-6 h-6 mr-auto">
            <ArrowLeftIcon />
          </Link>
          <Typography className="mr-auto" variant="h4" color="blue-gray">
            Create New Request
          </Typography>
        </div>
        <Typography color="gray" className="mt-4 font-bold">
          Enter your event details:
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-white"
          onSubmit={handleSend}
        >
          <div className="mb-4 flex flex-col gap-6">
            <label htmlFor="name" className='font-bold'>Event Name</label>
            <input
              id="name"
              className="border-2 border-black rounded-lg h-10 pl-2"
              type="text"
              name="name"
              placeholder='xxx'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="location" className='font-bold'>Location</label>
            <input
              id="location"
              className="border-2 border-black rounded-lg h-10 pl-2"
              type="text"
              name="location"
              placeholder='Google URL:'
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <label htmlFor="crowd-estimate" className='font-bold'>Crowd Estimate</label>
            <input
              id="crowd-estimate"
              className="border-2 border-black rounded-lg h-10 w-20 text-center"
              type="number"
              name="crowd-estimate"
              value={crowdEstimate}
              onChange={(event) => setCrowdEstimate(event.target.value)}
            />
            <label htmlFor="food-type" className='font-bold'>Food type</label>
            <input
              id="food-type"
              className="border-2 border-black pl-2"
              type="text"
              name="food-type"
              placeholder='Thai'
              value={foodType}
              onChange={(event) => setFoodType(event.target.value)}
            />
            <label htmlFor="event-duration" className='font-bold'>Event duration</label>
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

            <label htmlFor="priority" class="relative inline-flex items-center mb-4 cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div className="w-11 h-6 bg-red-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-orange-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-orange-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-lg font-bold text-gray-900 dark:text-blue-500">Priority 🏃💨</span>
            </label>
            <label htmlFor="notes" className='self-center font-bold'>Notes</label>
            <textarea
              id="notes"
              className="border-2 border-black pl-2"
              name="notes"
              placeholder="Dairy free...etc"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
            <input
              type="submit"
              value="REQUEST"
              className="border bg-blue-500 text-white rounded-lg py-2 font-bold"
            />{' '}
          </div>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have a request?{' '}
            <Link
              href="/user"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              <br />
              Edit one of your existing requests
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default NewRequest;
