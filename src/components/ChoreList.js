import { useState, useEffect } from "react";
import { db } from '../firebase-config.js'
import { collection, getDocs } from 'firebase/firestore';

function ChoreList () {
  const [chores, setChores] = useState([]);
  const choresCollectionRef = collection(db, 'chores')
  useEffect(() => {
    const getChores = async () =>{
      const data = await getDocs(choresCollectionRef);
      console.log(data);
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
