
import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     
      <Grid container >
        
          <Grid item xs={12} sm={4}>
            <div className='social-media-wrap'>

              <div class='footer-link-items'>
                <h2 class='footerLinksTitles'>Hours</h2>
                <Link to='/'>Tuesday 10-08</Link>
                <Link to='/'>Wednesday 10-08</Link>
                <Link to='/'>Thursday 10-08</Link>
                <Link to='/'>Friday 10-08</Link>
                <Link to='/'>Saturday 10-08</Link>
                <Link to='/'>Sunday 10-08</Link>
              
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
          <div className='social-media-wrap'>
          <div class='footer-link-items'>
            <h2 class='footerLinksTitles'>Address</h2>
            <Link to='/'>160 Abbey Ter</Link>
            <Link to='/'>Drexel Hill, PA</Link>
            <Link to='/'>USA, 19026</Link>
           
          </div>
          </div>
          </Grid>
          <Grid item xs={12} sm={4}>
          
          <div className='social-media-wrap'>
          <div class='footer-link-items'>
            <h2 class='footerLinksTitles'>Contact Us</h2>
            <Link to='/'>Emai:</Link>
            <Link to='/'>Phone Number:</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
          </div>
          </Grid>
       
      </Grid>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              YARA HAIR SALON
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>YARA HAIR SALON © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
