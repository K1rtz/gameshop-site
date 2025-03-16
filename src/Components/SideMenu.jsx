import React, {useState} from 'react'
import './SideMenu.css'
import navListData from '../Data/NavListData'
import socialsData from '../Data/SocialsData'
import NavListItem from './NavListItem'


function SideMenu({active, sectionActive}) {
    const [navData, setNavData] = useState(navListData);
    const [socData, setSocData] = useState(socialsData);

    const handleNavOnClick = (id, target) =>{
        const newNavData = navData.map(nav=>{
            
            nav.active = false;
            if(nav._id === id) nav.active = true;
            return nav
        })
        setNavData(newNavData)
        sectionActive(target)
    };
    

  return (

    <div className = {`sideMenu ${active ? 'active' : undefined}`}>
        <a href = "#" className = 'logo'>
            <i className="bi bi-dpad-fill"></i>
            <span className="brand">Play</span>
        </a>

        <ul className="nav">
            {
                navData.map(item=>(
                <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick}/>
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