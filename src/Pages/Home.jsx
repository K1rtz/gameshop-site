import React from 'react'
import './Home.css'
import GameSwiper from '../Components/GameSwiper'
import GameCard from '../Components/GameCard'
function Home({games, reference, sectionActive}) {
  return (
    <section id="home" className = "home active" ref = {reference}>
        <div className="container-fluid">
            <div className="row">
                <GameSwiper games = {games}/>
            </div>
            <div className="row" mb-4 mt-4>
              <div className="col-lg-6">
                <h2 className="sectionTitle">
                  Games on promotion
                </h2>
              </div>
              <div className="col-lg-6 d-flex justify-content-end align-items-center">
                <a href="#" className ="viewMore" onClick = {()=>sectionActive('categories')}>
                View More Games <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="row">
                {
                  games.slice(0,4).map(game=>(
                    
                    <GameCard key = {games._id} game = {game}/>
                  ))
                }
            </div>
        </div>
    </section>
  )
}

export default Home