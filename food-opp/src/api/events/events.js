import { database } from '@/src/firebase/firebase';
import { ref, child, set, remove, onValue } from 'firebase/database';

export const getAllEvents = async (setEventsCallback) => {
  const dbRef = ref(database);
  let snapshot = null;
  try {
    const ref = child(dbRef, 'events');
    onValue(ref, (snapshot) => {
      const data = snapshot.val();
      const eventsArray = [];

      for (const [key, value] of Object.entries(data)) {
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

      setEventsCallback(eventsArray);
    });
    snapshot = await get(child(dbRef, `events`));
  } catch (error) {
    console.log('error trying to get all events ', error);
  }
};

export const deleteEvent = async (eventId) => {
  try {
    console.log(`event id: `, eventId);
    await remove(ref(database, `events/${eventId}`));
  } catch (error) {
    console.log('error trying to delete event ', error);
  }
};

export const upvoteEvent = async (eventId, updatedVotes) => {
  try {
    console.log(`event id: `, eventId);
    await set(ref(database, `events/${eventId}/upvotes`), updatedVotes);
  } catch (error) {
    console.log('error trying to upvote for an event ', error);
  }
};
