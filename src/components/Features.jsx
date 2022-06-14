import { useScroll } from '@use-gesture/react';
import { animated,useSpring } from 'react-spring';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Features.css';



function Features () {
  const settings = {

    arrows:false,
    dots:true,
    infinite:false,
    speed:500,
    slidesToShow: 1,
    slidesToScroll:1,
    className:"carel"
    
    
    
  };
   
    
    return (
      
      <div>
      <div  className='feature_container' >
      
           <Slider {...settings}  >
      
        
        
        
        <div className='bed'  >
        <div className='purple_div' style={{ width:"100%"}}>
        
          <h2>World Class  Accomodation</h2>
          <p>
                Classy Beds and Spacius Room to lay yourself.
                Available room service  and facilities such
                as hot Shower and Bathtub.
          </p>
        </div>
        

        </div>
       
      

        
        <div className='beach'  >
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>Private Beach</h2>
          <p>
                Come witness the Sunset with us.Such Wonders of the earth
                are best for making Memories that Last.
          </p>
        </div>
        

        </div>
    
      
        <div className='pool' >
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>5 Star Swimming Pools</h2>
          <p>
             Clean Fresh Water infront of your Accomodation.
             Swimming pools are big and can be warmed or cooled depending on
              users Preference.
          </p>
    
        </div>
        </div>

        <div className='gym'>
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>World Class Gym</h2>
          <p>
            Need Fitness?Dont Worry our state of the Art Gym 
            with modern Equipments got you covered.Ones
           you book a room or buy a meal,You can access the gym for 
           Free.
          </p>
    
        </div>
        </div>

        <div className='children'>
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>Children's Playing Park</h2>
          <p>
           Your Child will surely enjoy time Here.
           From Slides to Castles to All kinds of toys
           There is just to keep your kid playing.This is 
           a Perfect Gift for your Growing Soldier.
          </p>
    
        </div>
        </div>

        <div className='Spa'>
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>Spa & Massage </h2>
          <p>
          Whether you need some Massage or Just to
           chill in a Jacuzzi,This is the Place for you.
           Our Modern Spa and facilities will give you 
           a place to just relax and Enjoy the beuty of life.
          
          </p>
    
        </div>
        </div>

        <div className='camp'>
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>Safe Camping Space </h2>
          <p>
          A place to just spend a night under camp fire 
          with your Loved ones.A Safe space in the woods 
          to just drink,Laugh and tell Amazing Stories under 
          the stars
          </p>
    
        </div>
        </div>


        <div className='meal4'>
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>Amazing Meals </h2>
          <p>
          A Team of higly Qualified and Talented Chefs
          Ready to prepare a wide range of Delicacies just for you.
          You can never go wrong with us.Bring your Parties 
          and tummies and we'll sort you out.
        
        
          </p>
    
        </div>
        </div>

        <div className='walk'>
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>Natural Refreshing Park</h2>
          <p>
          Green space of nothing But trees and vegetation.
          This is the place you become One With Nature.
          Clean fresh air,Cool Breeze and beutiful sound of 
          Birds singing Melodies to your Ears.This is a place you want to be.
          
        
          </p>
    
        </div>
        </div>
        
        <div className='stars'>
        <div className='purple_div' style={{ width:"100%"}}>

        
          <h2>Beutiful Night Sky</h2>
          <p>
          Located in the outSkats of town,the madness 
          of the City will never reach you here.A Fantastic night Sky full 
          of Stars and extra terrestial bodies is a perfect place 
          to rekindle your memories.Just stare up and let the universe do its thing.
        
          </p>
    
        </div>
        </div>
         

</Slider>       
        </div>
        </div>


       
    )
}



export default Features;