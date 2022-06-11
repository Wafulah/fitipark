import { useState,useEffect } from 'react';
import {bool, func} from 'prop-types';
import  { CSSTransition } from 'react-transition-group';


import './Navbar.css';



const Burger = ({open,setOpen}) => {
    
    
    return (
    <div className="burger" open={open} onClick={() => setOpen(!open)}>
            <div ></div>
            <div ></div>
            <div ></div>
        </div>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
};

const Burger2 = ({open,setOpen}) => {
    
    
    return (
    <div className="burger2" open={open} onClick={() => setOpen(!open)} >
            <div ></div>
            <div ></div>
            <div ></div>
        </div>
    )
}
Burger2.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
};

const Menu2 = ({open}) => {
    const duration = 500;
    const [inProp, setInProp] = useState(true);
    
    return (
        <CSSTransition in={inProp} timeout={duration} classNames="alert"
        >
        <div className="alert-enter-active">
    <div className="menu2"  open = {open}>
    <div className='a_div'>
    <div className="extraa"></div>
       <p> <a href="/">
        About Us
        </a>
        </p>
        
        
        <p><a  href="/">
        Pricing
        </a>
        </p>
        

        
          <p><a  href="/">
          Contact Us 
        </a>
        </p>
        
        <p><a  href="/">
          Our Services 
        </a>
        </p>
        
        <p><a  href="/">
          Book With Us 
        </a>
        </p>
        </div>
     

        </div>
        </div>
        </CSSTransition>
    )
}
Menu2.propTypes = {
    open: bool.isRequired,
}
const Menu = ({open}) => {
    const [inProp, setInProp] = useState(false);
   
    return (
        <div>
    <div className="menu"  open = {open}>
        <a href="/">
            <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
            About Us
        </a>
        <a href="/">
            <span role="img" aria-label="price">&#x1f4b8;</span>
            Price
        </a>   
        
          <a href="/">
            <span role="img" aria-label="contact">&#x1f4e9;</span>
            Contact
        </a>


        </div>
        </div>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}

function Navbar () {
    const [open,setOpen] = useState(false);
   
   
    return (
        <div className="container">
        <div className="fiti_logo">
        <h1><b>F</b></h1>
        </div>
        <CSSTransition
                         transitionName="request-form"
                         transitionAppear={true}
                         transitionAppearTimeout={1000}
                         transitionEnter={false}
                         transitionLeave={false}
                         transitionEnterTimeout={1000}
                         transitionLeaveTimeot={300}
                         timeout={500}
                         >
                         <>
        {open ? <Burger2 open={open} setOpen={setOpen}/> : <Burger open={open} setOpen={setOpen}/> }
       
        { open ?  <Menu2 open={open} setOpen={setOpen}/> :  <Menu open={open} setOpen={setOpen}/> }
        
        
</>
               </CSSTransition>
       

        </div>
    )

}

export default Navbar;