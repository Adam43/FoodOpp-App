import { database } from '@/src/firebase/firebase';
import { ref, child, get, remove } from 'firebase/database';

export const getAllEvents = async () => {
  const dbRef = ref(database);
  let snapshot = null;
  try {
    snapshot = await get(child(dbRef, `events`));
  } catch (error) {
    console.log('error trying to get all events ', error);
  }

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
    await remove(ref(database, `events/${eventId}`));
  } catch (error) {
    console.log('error trying to delete event ', error);
  }
};
