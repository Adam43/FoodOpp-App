import { getAllEventsEndpoint } from '@/src/consts/firebase';

export const getAllEvents = async () => {
  try {
    const res = await fetch(getAllEventsEndpoint);

    const json = await res.json();

    const eventsArray = [];
    for (const [key, value] of Object.entries(json)) {
      const event = {
        id: key,
        name: value.name,
        status: 'searching',
        createdAt: value['created-at-in-millis'],
        expiresAt: value['expiry-time-in-millis'],
        groupSize: value['num-people'],
        type: value['food-type'],
        notes: value.description,
        upvotes: value.upvotes,
      };
      eventsArray.push(event);
    }

    console.log(`eventsArray `, eventsArray);
    return eventsArray;
  } catch (error) {
    console.log('error trying to fetch events ', error);
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const res = await fetch(
      `https://food-opp-default-rtdb.firebaseio.com/events/${eventId}.json`,
      {
        method: 'DELETE',
      }
    );

    const json = await res.json();

    console.log(`json `, json);
  } catch (error) {
    console.log('error trying to delete event ', error);
  }
};
