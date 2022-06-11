import { useScroll } from '@use-gesture/react';
import { animated,useSpring } from 'react-spring';
import './Feedback.css';



function Feedback () {
   
    
    return (

<div className="feedback_container">
        
        <div className='comments'>
                
          <h3>Otile Brown(Singer)</h3>
          <p>
              <b>"</b> The Service was Amazing.The Place is classy 
               ,somewhere really worthy my Money.I just Found my second Home. 
               <b>"</b>
          </p>
        
        

        </div>

        <div className='comments'>
        
        
          <h3>Koreako Tobiko(Politician)</h3>
          <p>
               <b>"</b>
              My kids love it here.Me and My family 
              always Spend as much time as we can in this wonderful 
              enviroment.Enables Us to let off steam for a while.


               <b>"</b>
          </p>
        
        

        </div>


        <div className='comments'>
        
        
        <h3>Candowell Athor(Tourist)</h3>
        <p>
             <b>"</b>
         Whenever i come to kenya for Vacation.I think of no other place.
         The sandy beach is clean and safe enabling me to focus on 
        having a good time and relaxing.
             <b>"</b>
        </p>
      
      

      </div>

      <div className='comments'>
         
        <h3>Maryann Shannel(Influencer)</h3>
        <p>
             <b>"</b>
           This is the Ultimate destination.Just Chill,Good Vibes 
           and Good Meals.This is where you'll find me 
           on weekends.

             <b>"</b>
        </p>

      </div>
      <div className='comments'>
         
        <h3>Andrew Kibaki</h3>
        <p>
             <b>"</b>
          I have fallen in love with this Wonderful Place.
          The Breeze from the beach just takes me back.Brings 
          back Memories that give meaning to me.

             <b>"</b>
        </p>

      </div><div className='comments'>
         
         <h3>Akothee Safari(Singer)</h3>
         <p>
              <b>"</b>
            This is a place that allows me to be who I am...A Boss.
            The kind of Classy and Elegance in this Hotel is just 
            Immaculate.
 
              <b>"</b>
         </p>
 
       </div><div className='comments'>
         
         <h3>Thee Pluto(Influencer)</h3>
         <p>
              <b>"</b>
            I got a place to hang out with friends and Family.
            The amount of Memories I have made in this place is just amazing.
            I Love the expirience i get From this Magnificent Hotel.
              <b>"</b>
         </p>
 
       </div>
</div>
    )


}




export default Feedback;