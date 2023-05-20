import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCnPEe8yHnPFCakFl-bDef9tqz4vZt3Tr4',

  authDomain: 'food-opp.firebaseapp.com',

  databaseURL: 'https://food-opp-default-rtdb.firebaseio.com',

  projectId: 'food-opp',

  storageBucket: 'food-opp.appspot.com',

  messagingSenderId: '359131553066',

  appId: '1:359131553066:web:5b6ec32a81402f774a5253',

  measurementId: 'G-J7XLMNBYB5',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
