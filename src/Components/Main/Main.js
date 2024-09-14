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
        if(document.querySelector('body').getAttribute('data-theme')=='Light'){
            DarkMode();
        }
        else{
            LightMode();
        }
    }
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li><a href='#'><span>Home</span> <i className='ri-home-line'></i> </a></li>
                    <li><a href='#'><span>About Me</span> <i className='ri-user-line'></i></a></li>
                    <li><a href='#'><span>Portfolio</span><i className='ri-user-4-line'></i></a></li>
                    <li><a href='#'><span>Resume</span><i className='ri-file-list-line'></i></a></li>
                    <li><a href='#'><span>Contact</span><i className='ri-contacts-book-line'></i></a></li>
                    <li id='nav_ThemeBtn'>
                        <i className='ri-sun-line' ></i>
                    </li>
                </ul>
                <div className='navbar-btn'>
                    <i className='ri-sun-line' onClick={ThemeHandler}></i>
                    <button>Let's Talk</button>
                    <i className='ri-menu-3-line'></i>
                </div>
            </div>

        </>
    )
}

export default Main
