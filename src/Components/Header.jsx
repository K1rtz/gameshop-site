import React, {useContext} from 'react'
import './Header.css';
import userImg from '../Images/craiyon-user-image.png'
import { AppContext } from '../App';

function Header({toggle, sectionActive}) {
const {library, bag} = useContext(AppContext);
 
  return (
    <header>
        <a href="#" className="menu" onClick={toggle}>
            <i className="bi bi-sliders2"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon" onClick = {()=>sectionActive('library')}>
                <i className="bi bi-heart-fill"></i>
                <span className="like">{library.length}</span>
            </a>
            <a href="#" className="icon" onClick = {()=>sectionActive('bag')}>
                <i className="bi bi-bag-fill"></i>
                <span className="bag">{bag.length}</span>
            </a>
            <div className="avatar">
                <a href="#"><img src={userImg} alt='User Image'/></a>
                <div className="user">
                    <span>User Name</span>
                    <a href="#">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header