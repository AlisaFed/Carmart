import React from 'react';
import './header.css'

const Header = () => {
    return (
        <>
        <header className="header">
                <select className='select'>
                    <option value="">Марка</option>
                    <option value="Audi">Audi</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Kia">Kia</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                </select>
        </header>
        </>
    )
}
export default Header;