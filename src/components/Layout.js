import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import '../style/Layout.css'
const Layout = () => {
    function toggleClass (e){
        let classes = 'my-class';
        let els = document.getElementsByClassName('my-class selected');
        if(els){
            while (els[0]) {
                els[0].classList.remove('selected')
            }
        }
        e.target.className = classes.replace('my-class','my-class selected');
    }
  
    
  return (
    <>
        <nav>
            <ul>
                <li><Link to='/' className="my-class selected" onClick={(e) =>toggleClass(e)} id="link"></Link></li>
                <li><Link to='/Main2' className="my-class" onClick={(e) =>toggleClass(e)} id="link"></Link></li>
                <li><Link to='/Main3' className="my-class" onClick={(e) =>toggleClass(e)} id="link"></Link></li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Layout