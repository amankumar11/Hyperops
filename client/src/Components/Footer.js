import React from 'react';
import '../assets/css/footer.css';
import Aman from '../assets/img/Aman1.jpeg';
import Shivam from '../assets/img/shivam.jpeg';
import MP from '../assets/img/MumPune1.jpg';
import github from '../assets/img/github1.png';

const Footer = () => {
  return (
  <div className='footer'>
      <div className='footer-content'>
        <h1>Developers 🖥️</h1>
        <p>Team-HO_217531</p>
        <div className='dev'>
            <img src={Aman} width="80px"></img>
            <p><a class="devname" href='http://amankumar.ga/'>Aman Kumar</a></p>
        </div>
        <div className='dev'>
            <img src={Shivam} width="80px"></img>
            <p><a class="devname" href='https://shivamdargan.gatsbyjs.io/'>Shivam Dargan</a></p>
        </div>
        <div className='github'>
          <a className="githubbtn" href='https://github.com/amankumar11/Hyperops'>
            <img src={github} width="50px"></img>
            <p>GitHub</p>
          </a>
          
          {/* <p>Made with Love by Team-HO_217531</p> */}
        </div>
      </div>
      <div className='footer-map'>
        <img src={MP} width='650px'></img>
      </div>
  </div>
  )
}

export default Footer;
