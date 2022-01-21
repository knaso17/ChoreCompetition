// Import the functions from SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const dotenv = require('dotenv');
dotenv.config();

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOM,
  databaseURL: process.env.DATAURL,
  projectId: process.env.PROJID,
  storageBucket: process.env.BUCK,
  messagingSenderId: process.env.SEND,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize and export database
export const db = getFirestore(app);
