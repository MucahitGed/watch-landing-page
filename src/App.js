import React , {useState} from 'react'
import AppRouter from './router/AppRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'  
import './style/Main.css'
import './style/App.css'
import leftbg1 from './img/10.jpg'
import leftbg2 from './img/11.jpg'
import rightbg1 from './img/contact.webp';
import rightbg2 from './img/58.png';
import { faPhone } from '@fortawesome/fontawesome-free-solid';


const App = () => {
    const [src , setSrc]  =useState(leftbg1)
    const [content , setContent]  =useState('')
    const [src2 , setSrc2]  =useState(rightbg1)
    const [content2 , setContent2]  =useState('')  


    function toggleClass2 (e){
        let classes = 'btn';
        let els = document.getElementsByClassName('btn selected');
        if(els){
            while (els[0]) {
                els[0].classList.remove('selected')
            }
        }
        e.target.className = classes.replace('btn','btn selected');
    }

    function onClick(){
        setSrc(leftbg1)
        setContent('')
    }
    function onClick2(){
        setSrc(leftbg2)
        setContent('We Are a Special Watch Company Which Serve You Since 1958 from Los Angeles')
    }

    function toggleClass3(e){
        let classes = 'btn2';
        let els = document.getElementsByClassName('btn2 selected');
        if(els){
            while (els[0]) {
                els[0].classList.remove('selected')
            }
        }
        e.target.className = classes.replace('btn2','btn2 selected');
    }

    function onClick3(){
        setSrc2(rightbg1)
        setContent2('')
    }
    function onClick4(){
        setSrc2(rightbg2)
        setContent2(
            <div className='social'>
                <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                <FontAwesomeIcon icon={faInstagram} className="icon"/>
                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                <FontAwesomeIcon icon={faPhone} className="icon"/>
            </div>
        )
    }
  return (
    <div>
        <AppRouter/> 
        <div className="bottom-div">
            <div className="bottom-left" style={{backgroundImage:`url(${src})`}}>
                <h3>Who We Are</h3>
                <p>{content}</p> 
                <ul className="buttons buttons-left">
                    <li type='submit' className='btn selected' onClick={(e) =>{
                        toggleClass2(e)
                        onClick()}} ></li>
                    <li type='submit' className='btn' onClick={(e) =>{
                        toggleClass2(e)
                        onClick2()}} ></li>
                </ul>
            </div>
            <div className="bottom-right" style={{backgroundImage:`url(${src2})`}}>
                <h3 className='right-title'>Contact Us To Design Your Omega</h3>
                <p>{content2}</p>
                <ul className="buttons buttons-left">
                    <li type='submit' className='btn2 selected' onClick={(e) =>{
                        toggleClass3(e)
                        onClick3()}} ></li>
                    <li type='submit' className='btn2' onClick={(e) =>{
                        toggleClass3(e)
                        onClick4()}} ></li>
                </ul> 
            </div>
        </div>
    </div>
  )
}

export default App