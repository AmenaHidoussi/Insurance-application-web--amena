import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="footer mt-5 pt-5 pb-5 ">
         <div className="im">
        <img className='img-fluid' style={{maxWidth: '200px', maxHeight: '300px'}}  src={logo} />
        </div>
        <br/><br/><br/><br/><br/><br/>
      <div className="container cn  d-flex justify-content-center w-100">
        <div className="row ">
       
        <div className="col-lg-3 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-3">Contactez_nous</h4>
            
            <p className="mb-0"><FontAwesomeIcon icon={faPhone} style={{ color: "#188EBB" }}  /> (+216) 754-3010</p>
            <p className="mb-0"> <FontAwesomeIcon icon={faEnvelope} style={{ color: "#188EBB" }}  /> SERassurance@gmail.com</p>
          </div>
         
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">A PROPOS</h4>
            <ul className="m-0 p-0">
              <li>- <a href="#">A propos de nous</a></li>
              <li>- <a href="#">Nos Services</a></li>
              <li>- <a href="#">Nos Partenaires</a></li>
       
            </ul>
          </div>
         
          

          <div className="col-lg-3 col-xs-12 links link2">
            <h4 className="mt-lg-0 mt-sm-3">AIDE</h4>
            <ul className="m-0 p-0">
              <li>- <a href="#">Contact</a></li>
              <li>- <a href="#">Espace Client</a></li>
             
       
            </ul>
           
          </div>
          <div className="col-lg-3 col-xs-12 links link3">
            <h4 className="mt-lg-0 mt-sm-3">Démarrez ici</h4>
            <p className="mb-0"> Accédez à votre site web d'assurance  </p>
            <a href="/"><button class="bn632-hover bn26">Inscrivez_vous</button></a>
            <br/>  <br/>  <br/>
            </div>
        </div>
       
        <div className="row mt-5">
          <div className="col copyright">
            <p className="text-black"><small>©  2024  Copyright  SER assurance. Tous les droits sont réservés.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;