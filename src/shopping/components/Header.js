import React from 'react'

const Header = () => {
    return (
        <div className='HeaderSection'>
            <div className='left'>
                <div className='title'>
                    <h2> Shopping MALL </h2>
                </div>

            </div>

            <div className='center'>
                <ul>
                    <li><h3>Women</h3></li>
                    <li><h3>Men</h3></li>
                    <li><h3>Beauty</h3></li>
                    <li><h3>Kids</h3></li>
                </ul> </div>

            <div className='search'>
                <input type='text' placeholder='searching...'></input>
            </div>

            <div className='right'>
                <div className='signIn'> signin
                </div>
                <div class Name="cart"> addCart

                </div>
            </div>


        </div>
    )
}

export default Header
