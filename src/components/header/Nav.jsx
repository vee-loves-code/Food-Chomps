import React, { Component } from 'react';
import './Nav.css'
import { menuitems } from './MenuItems'


class Nav extends Component {
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }



    render() {
        return (
            <nav className="navbarItems" id="home">

                <div>

                    <img src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3cf8176b5c2_Logo.png" alt="" />
                </div>


              

                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {menuitems.map((item, index)=> {
                       return (
                            <li key={index}>
                                <a   className={item.cName}
                                href={item.url}>
                                    {item.text}
                                </a>
                            </li>
                            
                        )
                       })}
      

                    
                </ul>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                <button className="cart__button"><i class="fa fa-shopping-cart"></i>
                <span className="cart__count">3</span>
                </button>

                <button className="burger__menu" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                    
                </button>

                </div>
             

            </nav>
        );
    }
}



export default Nav;