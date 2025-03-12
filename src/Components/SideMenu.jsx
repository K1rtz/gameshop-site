import React, {useState} from 'react'
import './SideMenu.css'
import navListData from '../Data/NavListData'
import socialsData from '../Data/SocialsData'
import NavListItem from './NavListItem'


function SideMenu() {
    const [navData, setNavData] = useState(navListData);
    const [socData, setSocData] = useState(socialsData);
  return (

    <div className = "sideMenu">
        <a href = "#" className = 'logo'>
            <i className="bi bi-dpad-fill"></i>
            <span className="brand">Play</span>
        </a>

        <ul className="nav">
            {
                navData.map(item=>(
                <NavListItem key={item._id} item={item}/>
                ))
            }
        </ul>

        <ul className="socials">
            {
                socData.map(item =>(
                    <NavListItem key={item._id} item={item}/>
                ))
            }
        </ul>
    </div>
  )
}

export default SideMenu