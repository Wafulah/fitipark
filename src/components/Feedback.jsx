import { useState,useEffect,useRef } from 'react';
import { useScroll } from '@use-gesture/react';
import { animated,useSpring } from 'react-spring';
import 'animate.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Feedback.css';


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



function Feedback () {
  const settings = {
    dots:false,
    infinite:true,
    speed:700,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    fade: true


  };

  const feedhook = useRef();
  const onScreenfeed = useOnScreen(feedhook, "-150px");
   
    
    return (
 <div>
<div className="feedback_container" ref={feedhook}>

<Slider {...settings}  >
        <div className='comments'>
        {onScreenfeed ? <> <h3 className="animate__animated animate__lightSpeedInRight">Otile Brown(Singer)</h3></> : <h3>FitiPark</h3> }
       
      
                
          
          <p>
              <b>"</b> The Service was Amazing.The Place is classy 
               ,somewhere really worthy my Money.I just Found my second Home. 
               <b>"</b>
          </p>
        
        

        </div>

        <div className='comments'>
        {onScreenfeed ? <> <h3 className="animate__animated animate__lightSpeedInRight">Koreako Tobiko(Politician)</h3></> : <h3>FitiPark</h3> }
        

          <p>
               <b>"</b>
              My kids love it here.Me and My family 
              always Spend as much time as we can in this wonderful 
              enviroment.Enables Us to let off steam for a while.


               <b>"</b>
          </p>
        
        

        </div>


        <div className='comments'>
        
        {onScreenfeed ? <> <h3 className="animate__animated animate__lightSpeedInRight">Candowell Athor(Tourist)</h3></> : <h3>FitiPark</h3> }
        

        
                <p>
             <b>"</b>
         Whenever i come to kenya for Vacation.I think of no other place.
         The sandy beach is clean and safe enabling me to focus on 
        having a good time and relaxing.
             <b>"</b>
        </p>
      
      

      </div>

      <div className='comments'>
       
      {onScreenfeed ? <> <h3 className="animate__animated animate__lightSpeedInRight">Maryann Shannel(Influencer)</h3></> : <h3>FitiPark</h3> }
        

           
        
        <p>
             <b>"</b>
           This is the Ultimate destination.Just Chill,Good Vibes 
           and Good Meals.This is where you'll find me 
           on weekends.

             <b>"</b>
        </p>

      </div>
      <div className='comments'>
             
      {onScreenfeed ? <> <h3 className="animate__animated animate__lightSpeedInRight">Andrew Kibaki</h3></> : <h3>FitiPark</h3> }
        

        <p>
             <b>"</b>
          I have fallen in love with this Wonderful Place.
          The Breeze from the beach just takes me back.Brings 
          back Memories that give meaning to me.

             <b>"</b>
        </p>

      </div><div className='comments'>
      {onScreenfeed ? <> <h3 className="animate__animated animate__lightSpeedInRight">Akothee Safari(Singer)</h3></> : <h3>FitiPark</h3> }
        
         <p>
              <b>"</b>
            This is a place that allows me to be who I am...A Boss.
            The kind of Classy and Elegance in this Hotel is just 
            Immaculate.
 
              <b>"</b>
         </p>
 
       </div>
       <div className='comments'>
       {onScreenfeed ? <> <h3 className="animate__animated animate__lightSpeedInRight">Thee Pluto(Influencer)</h3></> : <h3>FitiPark</h3> }
     
         <p>
              <b>"</b>
            I got a place to hang out with friends and Family.
            The amount of Memories I have made in this place is just amazing.
            I Love the expirience i get From this Magnificent Hotel.
              <b>"</b>
         </p>
 
       </div>
       </Slider>
       </div>
    
</div>
    )


}




export default Feedback;