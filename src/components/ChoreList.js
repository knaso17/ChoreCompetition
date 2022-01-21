import { useState, useEffect } from "react";
import { db } from '../firebase-config.js'
import { collection } from 'firebase/firestore';

function ChoreList () {
  const [chores, setChores] = useState([]);
  const usersCollectionRef = collection(db, 'chores')
  useEffect(() => {
    const getChores = async () =>{

    }

    getChores()
  }, [])
  return(
    <div>
      Chores!!!
    </div>
  )
}
export default ChoreList;
