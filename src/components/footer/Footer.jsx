import React from 'react'
import './Footer.css'

function Footer() {
    return (
            <footer class="footer">
    <div class="container">
        <div class="row">

        <div class="footer-col first">
        <img src="https://uploads-ssl.webflow.com/5e865e09d8efa3310676b585/5e865e09d8efa3cf8176b5c2_Logo.png" alt="" />
               <p></p>   <br/>
                <p>Takeaway & Delivery template</p>
                <p>for small - medium businesses</p>
            
            </div>

            <div class="footer-col second">
                <h4>company</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">order</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-col third">
                <h4>Template</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                </ul>
            </div>
            <div class="footer-col fourth">
                <h4>flow base</h4>
                <ul>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">bag</a></li>
                    <li><a href="#">shoes</a></li>
                    <li><a href="#">dress</a></li>
                </ul>
            </div>
         
        </div>
    </div>

    <div className="footer__bottom">

    <p className="footer__copyright"> Built by <a href=""> Flowbase</a> . Powered by <a href=""> Webflow</a></p>
    <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>

    </div>

  




</footer>
    )
}

export default Footer