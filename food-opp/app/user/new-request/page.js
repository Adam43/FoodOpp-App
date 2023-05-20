'use client';

import Link from 'next/link';
import { Card, Typography, Input, Button } from '@material-tailwind/react';

const NewRequest = ({}) => {
  const handleSend = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="flex flex-col p-4 w-full items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Create New Request
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your event details
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSend}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Google Maps Location" />
            <Input size="lg" label="Crowd Estimate" />
            <Input size="lg" label="Food Type Request" />
            <Input size="lg" label="Event Duration (minutes)" />
            <Input size="lg" label="Notes" />
            <label for="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Request
          </Button>
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
