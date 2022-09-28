import React from 'react'
import './About.css'
const About = () => {
  return (              
    <div className="about">
        <div className="about__left__section">

            <div className="about__title__box">
                    <h1 className="about__emphasis">The home of fresh products </h1> 
               
            </div>

            <div className="about__desc__box">
                <p className="about__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum dignissimos amet deleniti dolore dolorum minus molestiae
                     vitae! Voluptates, aliquid numquam. dolore dolorum minus molestiae vitae!

                </p>
            </div>

            <div className="about__button__section">
                <button className="about__button">
                    Learn about us
                </button>
            </div>



        </div>

        <div className="about__right__section">

            <img className="about__big__image" src="https://uploads-ssl.webflow.com/5ffb696f27d34042dd023ae3/5ffb697001a2aded2c0be565_Food%20Image.png" alt="" />
         
        </div>

    </div>
  )
}  






export default About