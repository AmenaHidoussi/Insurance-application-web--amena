import React from 'react'
import './Contact.css'
import Navbar from '../navbar';

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className='div1'>
        <h1 className='title2'> Contact <br/>
        Disponible pour vous écouter </h1>
        </div>
    <div class="form-container">
      <form class="custom-form">
    <div class="form-group">
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" required/>
    </div>
    <div class="form-group">
      <label for="tel">Numéro de téléphone :</label>
      <input type="tel" id="tel" name="tel" required/>
    </div>
    <div class="form-group">
      <label for="email">E-mail :</label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div class="form-group">
      <label for="ville">Ville :</label>
      <input type="text" id="ville" name="ville" required/>
    </div>
    <div class="form-group">
      <label for="message">Message :</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Envoyer</button>
  </form>
  <div className='carte'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102183.64152176853!2d10.079258697265626!3d36.83675660000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd353c2a9bdafb%3A0xf40a3b2820de190d!2sPolytech-Intl!5e0!3m2!1sfr!2stn!4v1712863808074!5m2!1sfr!2stn" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>

</div>

        
        
    </div>
  )
}

export default Contact