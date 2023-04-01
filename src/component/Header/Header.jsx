import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="bg-purple drop-shadow-lg rounded-lg mx-2 my-2 md:my-5 px-5 md:px-12 py-2">
            <div className='flex justify-between'>
                <a className="logo text-3xl text-black">Great Ocean of Knowledge</a>

                <img className='rounded-full w-20' src="https://picsum.photos/200/300" />
            </div>
        </header>
    );
};

export default Header;