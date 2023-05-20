import { database } from '@/src/firebase/firebase';
import { ref, child, get } from 'firebase/database';

export const getAllEvents = async () => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `events`));

  if (!snapshot.exists()) {
    console.warn('No data available');
    return [];
  }

  const eventsArray = [];
  for (const [key, value] of Object.entries(snapshot.val())) {
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
  return eventsArray;
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
