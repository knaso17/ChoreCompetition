import { useState, useEffect } from "react";
import { db } from '../firebase-config.js'
import { collection, getDocs } from 'firebase/firestore';

function TournamentList () {
  const [tournament, setTournament] = useState([]);
  const tournamentsCollectionRef = collection(db, 'tournaments')
  useEffect(() => {
    const getTournaments = async () =>{
      const data = await getDocs(tournamentsCollectionRef);
      console.log(data);
    }

    getTournaments()
  }, [])
  return(
    <div>
      Tournament!!!
    </div>
  )
}
export default TournamentList;
