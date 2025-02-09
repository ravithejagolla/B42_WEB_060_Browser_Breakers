import React from "react";
import "../styling/Footer.css"

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-column">
          <h4>HealthBuddy</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For patients</h4>
          <ul>
            <li>Search for doctors</li>
            <li>Search for clinics</li>
            <li>Search for hospitals</li>
            <li>HealthBuddy Plus</li>
            <li>Covid Hospital listing</li>
            <li>HealthBuddy Care Clinics</li>
            <li>Read health articles</li>
            <li>Read about medicines</li>
            <li>HealthBuddy drive</li>
            <li>Health app</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For doctors</h4>
          <ul>
            <li>HealthBuddy Profile</li>
          </ul>
          <h4>For clinics</h4>
          <ul>
            <li>Ray by HealthBuddy</li>
            <li>HealthBuddy Reach</li>
            <li>Ray Tab</li>
            <li>HealthBuddy Pro</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For hospitals</h4>
          <ul>
            <li>Insta by HealthBuddy</li>
            <li>Qikwell by HealthBuddy</li>
            <li>HealthBuddy Profile</li>
            <li>HealthBuddy Reach</li>
            <li>HealthBuddy Drive</li>
          </ul>
          <h4>For Corporates</h4>
          <ul>
            <li>Wellness Plans</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li>Help</li>
            <li>Developers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>PCS T&C</li>
            <li>Healthcare Directory</li>
            <li>HealthBuddy Health Wiki</li>
          </ul>
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>Github</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© 2017, HealthBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
