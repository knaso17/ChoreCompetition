import { useState, useEffect } from "react";
import { db } from '../firebase-config.js'
import { collection, getDocs } from 'firebase/firestore';

function TournamentList () {
  const [tournament, setTournament] = useState([]);
  const tournamentsCollectionRef = collection(db, 'tournaments')
  useEffect(() => {

    const getTournaments = async () =>{
      const data = await getDocs(tournamentsCollectionRef);
      setTournament(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getTournaments();
  }, []);

  return(
    <div>
      <h1>Tournaments:</h1>
      {tournament.map(tourn => (<div key={tourn.id}><h2>Name: {tourn.name}</h2><h3>Open? {`${tourn.open}`}</h3></div>))}
    </div>
  )
}
export default TournamentList;
