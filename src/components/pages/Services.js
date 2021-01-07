import React from 'react';
import '../../App.css';
import TopImage from '../../images/headerSalonPicture.jpg';
import '../Footer.css';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import pink15 from '../../images/pink15.jpg';
export default function Services() {

  return <div>
    <div className='section1' style={{textAlign:'center',marginLeft:'15%',marginRight:'15%'} }>We use a level system for pricing, prices vary by lenght and thickness</div>
    <div className='section2'>
          <h3 id='section2Title'><strong> Private Room Available Upon Request</strong></h3>
          <h4 id='section2Text'> We are now offering a private room with just you and your stylist for your service.
                This room can only be booked by calling the salon. Please call for any questions. <u>+1(610) 457-7344</u>
          </h4>

        </div>
        <br></br>
        <br></br>
    <div className='services' style={{ backgroundImage: `url(${TopImage})`, width: '100%', height: '404px', textAlign: 'center', paddingTop: '60px', fontSize: '60px' }}>OUR SERVICES</div>;
    <Grid container  >
        
        <Grid item xs={12} sm={4}>
          <div className='social-media-wrap'>

            <div class='footer-link-items' style={{color:'black'}}>
              <h2 class='footerLinksTitles' style={{color:'black'}}>Hair Cuts</h2>
              <Link style={{color:'black'}} to='/'><b>Men's Cuts start at</b> $15+</Link>
              <Link style={{color:'black'}} to='/'><b>Momen's Cuts start at</b>  $25+</Link>
              <Link style={{color:'black'}} to='/'><b>Children starting at</b>  $10+</Link>
              <Link style={{color:'black'}} to='/'><b>Wet Cuts at </b> $25 - $35(Styling included)</Link>
           
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
        <div className='social-media-wrap'>
        <div class='footer-link-items'>
          <h2 style={{color:'black', textAlign:'center'}} class='footerLinksTitles'>Highlights</h2>
          <Link style={{color:'black'}} to='/'><b>Halo at</b> $85+</Link>
          <Link style={{color:'black'}} to='/'><b>Partial at</b>  $100+</Link>
          <Link style={{color:'black'}} to='/'><b>Full at</b>  $130+</Link>
         
        </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={4}>
        
        <div className='social-media-wrap'>
        <div  class='footer-link-items'>
          <h2 style={{color:'black'}} class='footerLinksTitles'>Body Waves & Permanent Waves</h2>
          <Link style={{color:'black'}} to='/'><b>Permanent & Body Waves at</b> 95+</Link>
          <Link style={{color:'black'}} to='/'><b>Spairal Perms at </b> 125+</Link>
          
        </div>
        </div>
        </Grid>
     
    </Grid>
    <br/>
    <Grid container  >
        
        <Grid item xs={12} sm={4}>
          <div className='social-media-wrap'>

            <div class='footer-link-items' style={{color:'black'}}>
              <h2 class='footerLinksTitles' style={{color:'black'}}>Color- We use Aveda, & L'orial Prifessional Haircolor</h2>
              <Link style={{color:'black'}} to='/'><b>Balayage at</b> $150+</Link>
              <Link style={{color:'black'}} to='/'><b>Root Retouchat</b>  $95+</Link>
              <Link style={{color:'black'}} to='/'><b>All over color at</b>  $80+</Link>
             
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
        <div className='social-media-wrap'>
        <div class='footer-link-items'>
          <h2 style={{color:'black', textAlign:'center'}} class='footerLinksTitles'>Extenssions</h2>
          <Link style={{color:'black'}} to='/'><b>We use HaloCouture Extenssions</b> $85+</Link>
          <Link style={{color:'black'}} to='/'>HaloCouture is 100% Human hair</Link>
          <Link style={{color:'black'}} to='/'>(by consulatation only)</Link>
         
        </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={4}>
        < img src={pink15}  style={{width:'100%', height:'100%' }} />
          </Grid>
      </Grid>
</div>
}