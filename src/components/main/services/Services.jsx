import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
        <div className="services__title__wrap">
            <h1>
                How it works
            </h1>
        </div>





        <div className="services__row">
            <div className="services__cards">
                <div className="services__image">
                    <img src="https://uploads-ssl.webflow.com/5ffb696f27d34042dd023ae3/5ffb697001a2ad41a60be5a1_Step%2001.png" alt="" />

                </div>
                <h1 className="services__text">Adapt your menu items</h1>
                <p className="services__desc">Easiliy adapt your menu using the webflow CMS and allow customers to browse your items</p>
            </div>


            <div className="services__cards">
                <div className="services__image">
                    <img src="https://uploads-ssl.webflow.com/5ffb696f27d34042dd023ae3/5ffb697001a2ad09530be5a8_Step%2002.png" alt="" />

                </div>
                <h1 className="services__text">Accept online orders and takeout</h1>
                <p className="services__desc">Easiliy adapt your menu using the webflow CMS and allow customers to browse your items</p>

            </div>


            <div className="services__cards">
                <div className="services__image">
                    <img src="https://uploads-ssl.webflow.com/5ffb696f27d34042dd023ae3/5ffb697001a2adb18c0be5a9_Step%2003.png" alt="" />

                </div>
                <h1 className="services__text">Manage Delivery and takeout</h1>
                <p className="services__desc">Easiliy adapt your menu using the webflow CMS and allow customers to browse your items</p>

            </div>

        </div>


    </div>
  )
}

export default Services