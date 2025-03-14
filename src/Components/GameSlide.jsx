import React from 'react'
import {SwiperSlide} from 'swiper/react';

function GameSlide({game, active, toggleVideo}) {
  return (
    <div className="gameSlider">
        <img src={game.img} alt="gameImage" />
        <div className={`video ${active? 'active' : undefined}`}>
        <iframe 
        width="1260" 
        height="709" 
        src= {game.trailer} 
        title={game.title} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        </div>
        <div className="content">
            <h2>{game.title}</h2>
            <p>{game.description}</p>
            <div className="buttons">
                <a href="#" className="orderButton">Order now!</a>
                <a href="#" className={`playBtn ${active ? 'active' : undefined}`} onClick={toggleVideo}>
                    <span className="pause">
                     <i class="bi bi-pause-fill"></i>
                    </span>
                    <span className="play">
                        <i className="bi bi-play-fill"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>
 )
}

export default GameSlide