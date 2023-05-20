import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/solid';
import Lottie from 'react-lottie-player';

import lottieJson from './lottie.json';

const EmptyList = ({}) => {
  return (
    <Card className="mt-6 w-2/3 min-w-fit mx-auto">
      <CardBody className="flex flex-col items-center gap-3">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 150, height: 150 }}
        />
        <Typography variant="h4" color="blue-gray" className="mb-2 text-center">
          Looks like there are no active events
        </Typography>
        <Typography className="text-center text-base">
          You can submit an event to all the registered food truck vendors on
          FoodOpp. This will notify all the vendors of your event and allow them
          to come sell food at your event
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-col items-center">
        <Link href="/user/new-request" className="inline-block">
          <Button className="flex items-center gap-2 text-lg">
            <PlusIcon strokeWidth={2} className="w-4 h-4" />
            Create an event
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EmptyList;
