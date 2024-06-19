import React, { useEffect, useState } from 'react';
import { LuSend } from "react-icons/lu";
import { GoCopy } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {

    useEffect(()=> {
        updateDate()
    },[])

    function updateDate() {
        try {
          var now = new Date();
      
          // Create a date/time formatting object with the timeZone option for India
          var options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          };
          var formatter = new Intl.DateTimeFormat('en-IN', options);
          var formattedTime = formatter.format(now);
      
          // Manually calculate the UTC offset for Asia/Kolkata
          var offsetMinutes = 330; // Asia/Kolkata is UTC+5:30
          var sign = offsetMinutes >= 0 ? "+" : "-";
          var hoursOffset = Math.floor(Math.abs(offsetMinutes) / 60).toString().padStart(2, '0');
          var minutesOffset = (Math.abs(offsetMinutes) % 60).toString().padStart(2, '0');
          var timeZoneString = `UTC${sign}${hoursOffset}:${minutesOffset}`;
      
          // Create the final format
          var finalString = `${formattedTime} ${timeZoneString} New Delhi, India`;
      
          // Find HTML elements
          const currentDateContact = document.getElementById('currentDateContact');
          const currentDate = document.getElementById('currentDate');
      
          // Update text in HTML elements
          if (currentDate) {
            currentDate.innerHTML = finalString;
          } else if (currentDateContact) {
            currentDateContact.innerHTML = finalString;
          } else {
            throw new Error('error in date object');
          }
        } catch (error) {
          console.error('failed to set date', error.message);
        }
      }
      
      // Call the function to update the date and time
      updateDate();
      
      
  
  setInterval(updateDate, 60000);
  return (
   <footer>
    <div className="footer-content">
        <div className="footer-left">
            <span style={{fontSize: '4rem'}} className='txt-light'>Lets Talk</span>
            <div className="footer-contact-info">

            <a href="" className='btn-fill'>Fill the form <LuSend /></a>
            <p className='txt-light'>or copy an email:
            <span>zenoscript.dev@gmail.com </span><GoCopy /></p>
            </div>
        </div>
        <div className="footer-right">
            <div className="footer-right-item">
                <div className='footer-right-item-header'>
                <p>Listening</p>
                <span>15 hours ago</span>
                </div>
                <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3x2k4o" className='footer-right-item-link'>
                <img src="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO3x2k4o-default.jpg" alt="playlist image" />
                    <div className="footer-right-item-content-info">
                        <span className='txt-light'>This Is ZAYN</span>
                        <span>Artist: Zayn</span>
                </div>
                </a>
                    
            </div>
            <div className="footer-right-item">
                <div className='footer-right-item-header'>
                <p>Reading</p>
                </div>
                <a href="https://jamesclear.com/atomic-habits" className='footer-right-item-link'>
                <img src="https://jamesclear.com/wp-content/uploads/2024/06/atomic-habits-dots.png" alt="playlist image" />
                    <div className="footer-right-item-content-info">
                        <span className='txt-light'>Atomic Habits</span>
                        <span>Artist: James Clear</span>
                </div>
                </a>
                    
            </div>
        </div>
    </div>
    <div className="footer-additional-info">
        <div className="info-item">
            <span>Version</span>
            <p className='txt-clear'>2024 <MdCopyright /> zenoscript.dev</p>
        </div>
        <div className="info-item">
            <span>Local time</span>
            <p className='txt-clear' id='currentDateContact'></p>
        </div>
        <div className="info-item">
            <span>Socials</span>
            <div className="socials-wrapper">

            <a className="social-item">
                <FaTwitter />
                <div>Twitter</div>
            </a>
            <a className="social-item">
                <FaLinkedin />
                <div>Linkedin</div>
            </a>
            {/* <a className="social-item">
                <FaTwitter />
                <div>Twitter</div>
            </a> */}
            </div>
            
        </div>
    </div>
   </footer>
  )
}

export default Footer
