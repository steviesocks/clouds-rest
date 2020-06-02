import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1>Backpacks</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>    
                <div className='content'>
                    <h1>Tents</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1>Hats</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1>Women's</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1>Men's</h1>
                    <span>Shop Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;