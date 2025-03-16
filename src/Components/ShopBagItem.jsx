import React, {useContext} from 'react'
import "./ShopBagItem.css"
import {AppContext} from '../App';

function ShopBagItem({game, index}) {

    const {bag, setBag} = useContext(AppContext);

    const handleRemoveFromBag = (game) =>{
        setBag(bag.filter(item=>item._id !== game._id)) 
    }

  return <tr className="shopBagItem">
    <td scpope = 'row'>{index+1}</td>
    <td>
        <img src = {game.img} alt="" className = "img-fluid"/>
    </td>
    <td>{game.title}</td>
    <td>${game.price.toFixed(2)}</td>
    <td>{game.discount * 100}%</td>
    <td>${(game.price *(1-game.discount)).toFixed(2)}</td>
    <td><a href="#" onClick={()=>{handleRemoveFromBag(game)}}>
    <i class="bi bi-bag-dash-fill"></i>
    </a></td>

  </tr>

}

export default ShopBagItem