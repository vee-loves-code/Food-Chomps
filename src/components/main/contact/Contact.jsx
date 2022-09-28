import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
    <div className="contact__left__section">

        <div className="contact__title__box">
                <h1 className="contact__emphasis">Call our store and takeaway when it suits you best</h1> 
           
        </div>

        <div className="contact__desc__box">
            <p className="contact__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Harum dignissimos amet deleniti dolore dolorum minus molestiae
                 vitae! Voluptates, aliquid numquam. dolore dolorum minus molestiae vitae!

            </p>
        </div>

        <div className="contact__button__section">
            <button className="contact__button">
                Ph. +61 233 2333
            </button>
        </div>



    </div>

    <div className="contact__right__section">

        <img className="contact__big__image" src="https://daks2k3a4ib2z.cloudfront.net/5e865e09d8efa3310676b585/5eb0bcb8036072a55de52baf_Food%20Takeaway-p-130x130q80.png" alt="" />
     
    </div>

</div>
  )
}

export default Contact