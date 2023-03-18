import React from 'react'
import '../styles/Home1.css'
import Navbar from './Navbar'

export default function Home1() {
    return (
        <div className='Home1-container'>
            <Navbar/>
            <div className='Home1-box'>
                <h2 className='focus-in-contract '>Nicolas Ojeda</h2>
                <h4 className='focus-in-contract2'>Desarrollador FullStack</h4>
            </div>   
        </div>
    )
}
