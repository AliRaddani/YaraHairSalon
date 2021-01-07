import React from 'react';
import '../../App.css';
import Grid from '@material-ui/core/Grid';

import Color from '../../images/color.jpg';
import Extension from '../../images/extension1.jpg';
import Blowout from '../../images/hairDryer1.png';
import Hight from '../../images/paint6666.jpg';
import Drink from '../../images/drink1.jpg';
import Iron from '../../images/iron.jpg';

function Home() {
  return (
    <>
      <div>
        <div class="home1" >
          <div className='section1'>

            let us tell your story

         </div>
          <div className='section1Text'>
            We Are Beauticians, Storytellers We Can Tell You Stories That Will Curl Your Hair!<i class="fas fa-star-half-alt"></i>
             Beauty Is Only Skin Deep, But Hairstylists Are A Cut Above!<i class="fas fa-star-half-alt"></i>If Your Hair Is
             Unbecoming To See ... Then Maybe You Should Be Coming To Us!
         </div>
        </div>
        <div >
          <Grid container>

            <Grid item xs={12} sm={6} style={{ marginTop: '10%' }}>
              <div className='section1'>Your Safety First</div>
              <h4 className='section1Text' style={{ paddingLeft: '7%', paddingRight: '7%' }}> Your safety in our salon is our top priority. Masks are required - sanitizer are given at the door.
       Please contact us with any questions.<u>+1(610) 457-7344</u>
              </h4>

            </Grid>


            <Grid item xs={12} sm={6}>
              <div class="imgBody" />
            </Grid>

          </Grid></div>

        <div class="home2">
          <div className='section1'>
            Our Services
    </div>
<br/><br/>
          <Grid container >

            <Grid item xs={12} sm={4}  >
            <Grid container ><Grid item xs={12}   ><div className='section1Text' style={{ marginLeft: '38%',backgroundImage: `url(${Color})`,marginRight:'38%', height:'110px',}}>

            </div></Grid></Grid>
              <h1 className='section1Text' style={{ fontSize: '30px', textAlign: 'center' }}>Color</h1>
              <p className='section1Text' style={{ paddingLeft: '7%', paddingRight: '7%' }}>For Stubborn grey we use Framesi, Davines, and Aveka.</p>
            </Grid>
            <Grid item xs={12} sm={4} >
            <Grid container ><Grid item xs={12}   ><div className='section1Text' style={{ marginLeft: '38%',backgroundImage: `url(${Blowout})`,marginRight:'38%', height:'110px',}}>

</div></Grid></Grid>
              <h1 className='section1Text' style={{ fontSize: '30px', textAlign: 'center' }}>Blowout Bar</h1>
              <p className='section1Text' style={{ paddingLeft: '7%', paddingRight: '7%' }}>Brazilian Blowouts and Keratin Treatments will leave you frizz free.</p>
            </Grid>
            <Grid item xs={12} sm={4} >
              <div className='section1Text' style={{ marginLeft: '38%',backgroundImage: `url(${Extension})`,marginRight:'38%', height:'110px',}}></div>
              <h1 className='section1Text' style={{ fontSize: '30px', textAlign: 'center' }}>Extensions</h1>
              <p className='section1Text' style={{ paddingLeft: '7%', paddingRight: '7%' }} >We use HaloCoutour extensions -call for a consultation.</p>
            </Grid>
          </Grid>
          <br/><br/> <br/><br/>
          <Grid container >
            <Grid item xs={12} sm={4} >
            <Grid container ><Grid item xs={12}   ><div className='section1Text' style={{ marginLeft: '38%',backgroundImage: `url(${Hight})`,marginRight:'38%', height:'110px',}}>

</div></Grid></Grid>
              <h1 className='section1Text' style={{ fontSize: '30px', textAlign: 'center' }}>Highlights</h1>
              <p className='section1Text' style={{ paddingLeft: '7%', paddingRight: '7%' }} >Beautiful highlights, expertly applied.</p>
            </Grid>
            <Grid item xs={12} sm={4} >
            <Grid container ><Grid item xs={12}   >
            <div className='section1Text' style={{ marginLeft: '38%',backgroundImage: `url(${Iron})`,marginRight:'38%', height:'110px',}}></div>
 </Grid> </Grid>
              <h1 className='section1Text' style={{ fontSize: '30px', textAlign: 'center' }} >Body Wave</h1>
              <p className='section1Text' style={{ paddingLeft: '7%', paddingRight: '7%' }}>Looking for waves or curls?</p>
            </Grid>
            <Grid item xs={12} sm={4} >
            <Grid container ><Grid item xs={12}   >
            <div className='section1Text' style={{ marginLeft: '38%',backgroundImage: `url(${Drink})`,marginRight:'38%', height:'110px',}}></div>
 </Grid> </Grid>
              <h1 className='section1Text' style={{ fontSize: '30px', textAlign: 'center', }}>Special Occasions</h1>
              <p className='section1Text' style={{ paddingLeft: '7%', paddingRight: '7%',}}>We can also accommodate your wedding location and provide services on site!</p>
            </Grid>
          </Grid>
        </div>
        <div className='section2'>
          <h3 id='section2Title'><strong> Private Room Available Upon Request</strong></h3>
          <h4 id='section2Text'> We are now offering a private room with just you and your stylist for your service.
                This room can only be booked by calling the salon. Please call for any questions. <u>+1(610) 457-7344</u>
          </h4>

        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

    </>
  );
}
 
export default Home;