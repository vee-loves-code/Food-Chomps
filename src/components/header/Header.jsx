import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header__left__section">

            <div className="header__title__box">
                <h1> Beautiful food & takeaway, <br/>
                    <span className="header__emphasis">delivered </span> 
                    to your door.
                </h1>
            </div>

            <div className="header__desc__box">
                <p className="header__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum dignissimos amet deleniti dolore dolorum minus molestiae
                     vitae! Voluptates, aliquid numquam. dolore dolorum minus molestiae vitae!

                </p>
            </div>

            <div className="header__button__section">
                <button className="header__button">
                    place an order
                </button>
            </div>

            <div className="header__review">
                <img className="header__review__image" src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3a3f976b5c3_trustpilot-logo.svg" alt="" />
                 <br/>
                <p><span className="emphasis"> 4.8 out of 5 </span> based on 2000+ reviews</p>
            </div>

        </div>

        <div className="header__right__section">

            <img className="header__big__image" src="https://uploads-ssl.webflow.com/5ffb696f27d34042dd023ae3/5ffb697001a2ad9fbd0be567_Hero%20Image.png" alt="" />
         
        </div>

    </div>
  )
}

export default Header



