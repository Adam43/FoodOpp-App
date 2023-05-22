'use client';

import {} from 'react';
import {
  ChatBubbleBottomCenterTextIcon,
  MapPinIcon,
  XCircleIcon,
  UserGroupIcon,
  Bars2Icon,
  ClockIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/solid';

import { MAX_NOTE_LENGTH, MAX_TITLE_LENGTH } from '@/src/consts/cardComponent';
import { Button } from '@material-tailwind/react';
import moment from 'moment';
import toast from 'react-hot-toast';
import { deleteEvent, upvoteEvent } from '@/src/api/events/events';

export default function Cardcomponent({
  requestId,
  name,
  status,
  createdAt,
  expiresAt,
  groupSize,
  type,
  notes,
  location,
  upvotes
}) {
  const truncatedTitle =
    name && name.length > MAX_TITLE_LENGTH
      ? `${name.slice(0, MAX_TITLE_LENGTH)}...`
      : name;
  const truncatedNotes =
    notes && notes.length > MAX_NOTE_LENGTH
      ? `${notes.slice(0, MAX_NOTE_LENGTH)}...`
      : notes;

  const timeFromNow = moment(expiresAt).fromNow();
  const expired = moment().valueOf() >= expiresAt;
  const expiryText = expired ? 'Expired' : 'Expires';

  const handleDelete = () => {
    const deleteRequest = async () => {
      try {
        await deleteEvent(requestId);
        toast.success(`Deleted ${name ?? ''} event`);
      } catch (error) {
        toast.error(
          `Could not delete ${name ?? ''} due to error: ${JSON.stringify(
            error
          )}`
        );
      }
    };

    deleteRequest();
  };

  const handleUpvote = () => {
      console.log("Doing Upvote " + upvotes);
      const doUpvote = async (currentVote) => {
          try {
            const incrementedVotes = currentVote + 1;
            console.log("Incrementing Upvote to " + incrementedVotes);
            await upvoteEvent(requestId, incrementedVotes);
            // TODO paint the new vote
          } catch (error) {
            toast.error(
              `Could not upvote ${name ?? ''} due to error: ${JSON.stringify(
                error
              )}`
            );
      }
    };

      doUpvote(upvotes);
  };

  return (
    <div className="flex justify-center mt-30 px-5 mb-4 pb-20">
      <div className="w-full md:w-[600px] max-h-96 h-fit bg-white border-2 border-black rounded-2xl p-4 md:flex-row justify-between">
        <div className="flex justify-between ">
          <div className="flex-col flex">
            <h1 className="font-bold text-2xl">{truncatedTitle}</h1>

            <a
              href={location}
              className="text-blue-600 hover:underline flex items-center"
            >
              <MapPinIcon className="h-4 w-4" /> Maps link
            </a>
          </div>

          <div className="flex items-center justify-end flex-col-reverse sm:flex-row ">
            <h1 className="flex flex-col min-w-fit gap-1 text-xs square-full mr-2">
              <div className="flex items-center text-blue-500">
                <ClockIcon className="w-5 h-5 text-blue-500" /> {expiryText}
              </div>
              <div>{timeFromNow}</div>
            </h1>
            <Button
              color="red"
              variant="outlined"
              className="flex items-center gap-2 p-3"
              onClick={handleDelete}
            >
              <XCircleIcon className="w-5 h-5" />
              Cancel
            </Button>
          </div>
        </div>

        <div className="flex mt-10 gap-4 justify-between">
          <div className="flex w-1/5">
          
            <Button
              color="white"
              className="flex items-center h-6 w-15"
              onClick={handleUpvote}
            >
              <HandThumbUpIcon color="#4661b0" className="flex items-center h-6 w-15" onClick={handleUpvote}/>
            </Button>
            <div>
            <h1 className="font-bold">Likes</h1>
            <p>{upvotes}</p>
            </div>
          </div>

          <div className="flex w-1/5 gap-2">
          <UserGroupIcon className="h-6 w-6 text-blue-500" />
            <div>
              <h1 className="text-blue-500">People</h1>
              <p>{groupSize}</p>
            </div>
          </div>

          <div className="flex w-1/5 gap-2">
            <Bars2Icon className="h-6 w-6 text-blue-500" />
            <div>
              <h1 className=" text-blue-500">Type</h1>
              <p>{type}</p>
            </div>
          </div>

          <div className="flex w-3/5 gap-2">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-blue-500" />
            <div>
              <h1 className=" text-blue-500">Notes</h1>
              <div className="text-sm">{truncatedNotes}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
