import React from "react";
import "./Footer.css";
import footer from '../../image/footer.png';
import nn from '../../image/nn.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {

  return (
    <>
  <div className="footer">
<div className="all-col">
<div className="firstCol">
<img src={nn} className="image1" alt="Team Member" style={{paddingTop:"2rem"}} /><br/><br/>
<div className="social-container">
                    <a href="https://www.facebook.com/ghassan.halimi.12" rel="noreferrer" target="_blank"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" rel="noreferrer" target="_blank" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/smartphone.byghassan/" rel="noreferrer" target="_blank"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.youtube.com/" rel="noreferrer" target="_blank"
                        className="facebook social">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank"
                        className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                  
                </div>
<br/>
<p className="c"> Order of Engineers and Architects &copy; {new Date().getFullYear()}
          </p>
</div>
<div className="secondCol">
<h3 className="c">Contact Us</h3>
<p className="c">Contact OEA</p>
<p className="c">Contact Laboratory</p>
<p className="c">Contact Training Center</p> 
</div>
<div className="thirdCol">
<h3  className="c">Visit Us</h3>
<p className="c">Visit OEA</p>
<p className="c">Visit Laboratory</p>
<p className="c">Vist Training Center</p> 
</div>
<div className="fourthCol">
<h3  className="c">About Us</h3>
<p className="c">Latest News</p>
<p className="c">Upcomming Event</p>
<p className="c">Library</p>
<p className="c">Uprivacy Policy</p>
<p className="c">Terms of Use</p>
</div>


<div className="fifthCol"></div>
<img src={footer} className="image1" alt="Team Member" width="10%" heitgh="10%" />
</div>
  </div>
    </>
  );
}