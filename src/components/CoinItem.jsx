import React from 'react'
import './Coins.css';

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className="img-symbol">
            
        </div>
        </div>
  )
}

export default CoinItem