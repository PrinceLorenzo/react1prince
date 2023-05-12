import React from 'react';
import "./Contact.css";
import image from "../images/me.jpg";

const Contact = () => {
  return (
    <div className="container">
      <div className="content">
      <img src={image} alt="" />
    <p>My Facebook <a href="https://web.facebook.com/chokqt/"><i class="fa fa-facebook-official w3-hover-opacity"></i></a></p>
    <br/>
    <p>My Instagram <a href="https://www.instagram.com/chok2go/"><i class="fa fa-instagram w3-hover-opacity"></i></a></p>
    <br/>
    <p>My Email <a href="https://www.chokqt24@gmail.com/"><i class="fa fa-envelope w3-hover-opacity"></i></a></p>
    <footer>
    <p1 class="w3-medium">Created by <a href="https://web.facebook.com/chokqt/" target="blank" class="w3-hover-text-green">Prince Lorenzo.</a></p1>
    </footer>
    </div>
    </div>
  )
}

export default Contact
