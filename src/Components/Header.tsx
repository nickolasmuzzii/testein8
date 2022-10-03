import React from 'react'
import logo from '../Images/logo-in8-dev.svg'
import CircleIcon from '@mui/icons-material/Circle';
import '../styles/ComponentStyles/Header.css'
type HeaderProps = {
    className?: string;
}
const Header = ({ className }: HeaderProps) => {
    
  
    return (
        <div className='header-container'>
            <img className="logo" src={logo} alt="logo" />
            <div className="links">
                <p>cadastro</p>
                <CircleIcon className="icons"/>
                <p>lista</p>
                <CircleIcon className="icons"/>
                <p>sobre mim</p>

            </div>
            
        </div>
    )
}

export default Header
   