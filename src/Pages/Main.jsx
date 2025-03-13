import React, {useState, useEffect} from 'react'
import './main.css';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import Home from './Home';

function Main() {
  const[active, setActive] = useState(false);
  const[games, setGames] = useState([]);

  const handleToggleActive = ()=>{
    setActive(!active);
    console.log("ChangedState");
  }

  const fetchData = () =>{
    fetch('http://localhost:3000/api/gamesData.json')
    .then(res => res.json())
    .then(data =>{
      setGames(data);
    })
    .catch(e=>console.log(e.message));
  }

  useEffect(()=>{
    fetchData();
  }, [])//[] je dependency na osnovu kog ce se triggerovati ponovo, ako je prazan nece se trigerovati opet

  return (<main>
    <SideMenu active = {active} />
    <div className={`banner ${active? 'active' : undefined}`}>
      <Header toggle = {handleToggleActive}/>
      <div className="container-fluid">
        <Home games = {games}/>
      </div>
    </div>
  </main>);
}

export default Main