import React, {useState} from 'react';
import Goal from './Goal.js';
import './roadmap.css';

function Roadmap() {
    const Q2 = [
        {
            heading: 'Sibe protocol release which consists of SOL stake delegating program on Solana',
            done: false,
        },
        {
            heading: 'Allowance to minting the staking derivatives named SIBE',
            done: false,
        },
        {
            heading: 'Technical document of Sibe protocol',
            done: false,
        },
        {
            heading: 'Open source code:',
            body: ['Staking pool with Delegate program', 'Order pool for matching liquidations', 'Price worker and pool\'s rebalancer', 'Bot Validator\'s stake delegating system'],
            done: false,

        },
        {
            heading: 'DAO planning',
            done: false,

        },
        {
            heading: 'Token vesting',
            done: false,

        },
        {
            heading: 'Launch',
            done: false,

        },
        {
            heading: 'Mint NFT after project launch',
            done: false,

        }
    ];

    const Q3 = [
        {
            heading: 'Unlock all tokens',
            done: false,
        },
        {
            heading: 'AMM for GameFI launch - SIBESWAP',
            done: false,
        },
        {
            heading: 'Listing token white list and infrastructure to generate game project’s tokenomic',
            done: false,
        },
        {
            heading: 'Sibe token lending and borrowing',
            done: false,

        },
        {
            heading: 'Integrate Solana’s DeFi protocols liquidity providing',
            done: false,

        },
    ];

    
    const Q4 = [
        {
            heading: 'Unlock all tokens',
            done: false,
        },
        {
            heading: 'Become DAO’s family',
            done: false,
        },
        {
            heading: 'NFT marketplace for GameFI on Solana',
            done: false,
        },
    ]

    return (<>
        <h1>Q2</h1>
        <div className='wrapper'>
            {Q2.map((item) => (
                <Goal info={item} />
            ))}
        </div>

        <h1>Q3</h1>
        <div className='wrapper'>
            {Q3.map((item) => (
                <Goal info={item} />
            ))}
        </div>

        <h1>Q4</h1>
        <div className='wrapper'>
            {Q4.map((item) => (
                <Goal info={item} />
            ))}
        </div>
    </>

        
    );
  }
  
  export default Roadmap;
