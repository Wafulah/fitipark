import { useState,useEffect,useRef } from 'react';
import './App.css';
import 'animate.css';
import handleViewport from 'react-in-viewport';
import { GrLocation,GrPhone,GrMailOption,GrFacebook,GrInstagram,GrSnapchat,GrLinkedin } from 'react-icons/gr';
import  { CSSTransition } from 'react-transition-group';
import { IconContext } from 'react-icons';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Feedback from './components/Feedback';

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

const  App = () => {
  const ref = useRef();
  const firehook = useRef();
  const onScreen = useOnScreen(ref, "-100px");
  const onScreenfire = useOnScreen(firehook, "-100px");


  const spahook = useRef();
  const onScreenSpa = useOnScreen(spahook, "-150px");

  const teamhook = useRef();
  const onScreenTeam = useOnScreen(teamhook, "-150px");

  const parkhook = useRef();
  const onScreenPark = useOnScreen(parkhook, "-150px");

  const mealhook = useRef();
  const onScreenMeal = useOnScreen(mealhook, "-150px");

  const abouthook = useRef();
  const onScreenabout = useOnScreen(abouthook, "-200px");

 
   
  
  
  return (
    
    <div className="Container">
    
     <Navbar  />
     <div className="head">
     <div className="head_content">
        <h1 className="animate__animated animate__lightSpeedInRight">We give you space to be yourself</h1>
       
       <h3 className="animate__animated animate__rotateIn">
       <p className="animate__animated animate__rotateIn">
       <b className="animate__animated animate__rotateIn">
       Whether you want to relax or have an amazing time,Fiti Park got you covered.From our serene 
       View to our refreshing meals,we have something for everyone.
        </b>
        
       </p>
       </h3>
     </div>


     </div> 
    
    <div className="App"> 
    <div className="abt">
      <h2>
      Your Search for a Perfect Vacation Destination is Finally Over.



      </h2>
      <div className="services">
      <h3><b>Our Services</b></h3>
      <p>Park</p>
      <p>Private Beach</p>
      <p>Spa & Massage</p>
      <p>Amazing Food</p>
      <p>Team Buiding</p>
      <p>5star Accomadation</p>
      <p>Conference Rooms</p>
      <p>Gaming Room</p>

      </div>
      <div className="extra"></div>
    </div>
    <div className="extra_title">
      <h1>Ultimate Vacation Destination </h1>
    </div>
    {/* <CSSTransition
                         transitionName="request-form"
                         transitionAppear={true}
                         transitionAppearTimeout={1000}
                         transitionEnter={false}
                         transitionLeave={false}
                         transitionEnterTimeout={1000}
                         transitionLeaveTimeot={300}
                         timeout={500}
                         > */}
                         <>
    <div className="creative" ref={ref}
        style={{
          
          visibility: onScreen ? "visible" : "hidden",
          transition: 'all 300s ease-in-out'

          
       
        }}
        >

    {onScreen ? <><h2 className="animate__animated animate__rollIn"><b>Ultimate Working destination</b></h2></> : "Creative" }
    {onScreen ? <><p className="animate__animated animate__zoomIn">

    No Better place to boost your creativity.The 
    Refreshing enviroment gives you ability to concetrate 
    on your work enabling flow of fresh ideas.

    </p></> : "Creative" }

    </div>
    <div className="extra_div"></div>

    {/* pic div */}

    <div className="extra"></div>
    <div className="fire" ref={firehook}
        style={{
          
          visibility: onScreenfire ? "visible" : "hidden",
          transition: 'all 300s ease-in-out'
       
        }}>
    {onScreenfire ? <><h2 className="animate__animated animate__rollIn"></h2><h2 className="animate__animated animate__rollIn"><b>Ultimate Camping destination</b></h2></> :"Camping" }
    {onScreenfire ? <><p className="animate__animated animate__zoomIn">
    You and your Family can get  a serene,safe 
    and Convinient space to bond under a camp fire.
    Enjoy Camp Expirience with lots of laugh and love.
    

    </p></> : "Fire" }

    </div>
    <div className="extra_div"></div>

{/* pic div */}

    <div className="extra"></div>
    <div className="spa" ref={spahook}
        style={{
          
          visibility: onScreenSpa ? "visible" : "hidden",
          transition: 'all 300s ease-in-out'
       
        }}>
   {onScreenSpa ? <><h2 className="animate__animated animate__rollIn"></h2> <h2 className="animate__animated animate__rollIn"><b>Ultimate Relaxing destination</b></h2></> : "Spa" }
   {onScreenSpa ? <><p className="animate__animated animate__zoomIn">
     World Class Spa,Massage, Swimming pool
     and serene Quite and cool enviroment for relaxing 
     and taking a break from the World.


    </p></> : "Spa" }

    </div>
    <div className="extra_div"></div>

    {/* pic div */}
    <div className="extra"></div>
    <div className="team" ref={teamhook}
        style={{
          
          visibility: onScreenTeam ? "visible" : "hidden",
          transition: 'all 300s ease-in-out'
       
        }}>
   {onScreenTeam ? <><h2 className="animate__animated animate__rollIn"></h2> <h2 className="animate__animated animate__rollIn"><b>Ultimate Bonding destination</b></h2> </> : "Team" }
   {onScreenTeam ? <><p className="animate__animated animate__zoomIn">
     Welcome to our range of activities from 
     Outdoor Games to Indoor activities That will 
     Guarantee Ultimate Bonding Expirience.



    </p></> : "Team" }

    </div>
    <div className="extra_div"></div>
    
    {/* pic div */}
    <div className="extra"></div>
    <div className="meal" ref={mealhook}
        style={{
          
          visibility: onScreenMeal ? "visible" : "hidden",
          transition: 'all 300s ease-in-out'
       
        }}>
    {onScreenMeal ? <><h2 className="animate__animated animate__rollIn"></h2><h2 className="animate__animated animate__rollIn"><b>Ultimate Meal Expirience</b></h2> </> : "Meal" }
    {onScreenMeal ? <><p className="animate__animated animate__zoomIn">
    Our Proffessional Chefs are here to 
    fill your thirst for Hunger with 5Star 
    Mouth watering meals.We give you the ultimate dining 
    Expirience.

    </p></> : "Meal" }
    </div>
    <div className="extra_div"></div>

    
    {/* pic div */}
    <div className="extra"></div>
    <div className="park" ref={parkhook}
        style={{
          
          
          visibility: onScreenPark ? "visible" : "hidden",
          transition: 'all 300s ease-in-out'
       
        }}>
    {onScreenPark ? <><h2 className="animate__animated animate__rollIn"></h2><h2 className="animate__animated animate__rollIn"><b>Ultimate Picnic Expirience</b></h2></> : "Park" }
    {onScreenPark ? <><p className="animate__animated animate__zoomIn">
    Come be one with nature in our 
    green refreshing Park.Fresh clean air,
    ample space & peace and quiteness for ultimate picnic.


    </p>
    </> : "Park" }
    </div>
    </>
    {/* </CSSTransition> */}
    <div className="extra_div"></div>

    <div className="about" ref={abouthook}>
    {onScreenabout ? <><h2  className="animate__animated animate__lightSpeedInRight">About Us</h2></> : "About us" }
    {onScreenabout ? <><p className="animate__animated animate__slideInDown ">
    We are a World Class Hotel located along a beach in Lamu
    County.We have state of the art facilities
    ready to accomodate your every need.<br />
    <br/>
    We have highly Proffessional staff to ensure 
    your time with us is seamless and stress free.
    Our higly qualified Chefs are here to make sure
    your meals meet your desires.
    Our very friendly and well trained staff will be 
    at your service at the ring of a bell.<br/>
    <br/>

    Our Services include:
    
      <li>World Class Fitness center</li>
      <li>Serene Green Park</li>
      <li>A Clean Private Beach</li>
      <li>5 Star Accomodation</li>
      <li>Well Equiped Conference hall</li>
      <li>A Spa & Maize</li>
      <li>Team Building Activies</li>
      <li>Gaming Room</li>
      <li>Amazing Food</li>
    
    <br/>
    <br/>

    Come Create Memories with us.We sell Expirience
    not just Food.Whether You want to just chill or
     have an amazing time with your loved ones...We got you
     We got you covered!!<br/><br/>

     <h2><b>Fiti Park </b></h2><br/>
     <h2><i>Your Ultimate 
      Vacation Destination</i></h2>






    </p></> : <h2>About us</h2> }



    </div>
    <div className="extra_div"></div>

    <Features />
    <div className="extra_div"></div>
    <Feedback />

    <div className="extra_div"></div>

    <div className="foot">
    <IconContext.Provider value={{ className:"blog_icon"}}>
   <GrLocation className='blog_icon' />
    
    <h4 className="animate__animated animate__backInDown">Lamu Beach</h4>
    <GrPhone />
    <h4 className="animate__animated animate__fadeInLeft">0710760872</h4>
    <GrMailOption />
    <h4 className="animate__animated animate__fadeInRight"><a href= "mailto:fitipark.gmail.com">fitipark.gmail.com</a></h4>
    </IconContext.Provider>
    <div className="social_links">
    <IconContext.Provider value={{ className:"social_icons"}}>
   
    <div>

<GrFacebook />
    </div>

    <div>
    <GrLinkedin />

    </div>

    <div>
    <GrInstagram />

    </div>
    <div>
   <GrSnapchat />
    </div>

    </IconContext.Provider>




    </div>
    
    
    <h5>Our Services</h5>
    
    <h5>Contact Us</h5>
      
    <h5>About Us</h5>


    <h6>Help</h6>
    <h6>Privacy Policy</h6>
    <h6>Terms of use</h6>

    <i>Copyright @2022 FitiPark.</i><br/>
    <i>All Rights Reserved.</i>
    


    </div>
     </div>
     </div> 
    
  );
}

export default App;
