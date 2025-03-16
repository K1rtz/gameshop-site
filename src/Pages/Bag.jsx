import React, {useState, useEffect} from 'react'
import './Bag.css'
import GameCard from '../Components/GameCard';
import ShopBagItem from '../Components/ShopBagItem';

function Bag({games, reference}) {


  const [total, setTotal] = useState(0);
  const handleTotalPayment = ()=>{
    return games.map(game=>game.price*(1-game.discount))
    .reduce((accumulator, currentValue)=>accumulator + currentValue, 0)
    .toFixed(2);
  };

  useEffect(()=>{
    setTotal(handleTotalPayment());
  },[games])


  return ( <section id="bag" className="bag" ref = {reference}>
    <div className="container-fluid">
      <div className="row" mb-3>
        <h1>My Bag</h1>
      </div>
        {
          games.length === 0 ? (
            <h2>Your bag is empty :(</h2>
          ) : (
            <>
            <div className="row">
              <div className="table-responsive">
                <table className="shopBagTable table-borderless align-middle w-100">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Preview</th>
                      <th scope="col">Game</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      games.map((game, index)=><ShopBagItem index = {index} key = {game._id} game = {game}/>)
                      
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row d-flex justify-content-between mt-5">
                    <div className="col-lg-3 d-flex align-items-center">
                      <p className="itemCount">Total items: {games.length}</p>
                    </div>
                    <div className="col-lg-9 d-flex justify-content-end">
                      <div className="payment">
                        Total: {total}
                        <a href="#">Checkout <i className="bi bi-credit-card-2-back-fill"></i></a>
                      </div>
                    </div>
            </div>
          </>
          )
        }
    </div>
    </section>
  );
}

export default Bag