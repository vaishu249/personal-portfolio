import React from 'react'
import "../Main/Main.css"
const Main = () => {
    const DarkMode = () =>{
        document.querySelector('body').setAttribute('data-theme','Dark')
    }
    const LightMode = () =>{
        document.querySelector('body').setAttribute('data-theme','Light')
    }
    const ThemeHandler =() =>{
        if(document.querySelector('body').getAttribute('data-theme')==='Dark'){
            LightMode();
        }
        else{
            DarkMode();
        }
    }
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li><a href='#home'><span>Home</span> <i className='ri-home-line'></i> </a></li>
                    <li><a href='#portfolio'><span>Portfolio</span><i className='ri-user-4-line'></i></a></li>
                    <li><a href='#about'><span>About Me</span> <i className='ri-user-line'></i></a></li>
                    <li><a href='#resume'><span>Resume</span><i className='ri-file-list-line'></i></a></li>
                    <li><a href='#contact'><span>Contact</span><i className='ri-contacts-book-line'></i></a></li>
                    <li id='nav_ThemeBtn' onClick={ThemeHandler}>
                        <i className='ri-sun-line' ></i>
                    </li>
                </ul>
                <div className='navbar-btn'>
                    <i className='ri-sun-line' onClick={ThemeHandler}></i>
                    <button>Let's Talk</button>
                </div>
            </div>

        </>
    )
}

export default Main
