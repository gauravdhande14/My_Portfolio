import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <section id="contact">
      <div class="form-container">
        <h2>Contact Us !</h2>
        <form action="https://api.web3forms.com/submit" method="POST" class="form">
          <input type="hidden" name="access_key" value="ee1f1776-b3d9-4067-82b1-d8a76cbe2836" />
          <label for="name">Name :</label>
          <input type="text" name="name" required />
          <label for="email">Email :</label>
          <input type="email" name="email" required />
          <label for="message">Message :</label>
          <textarea name="message"></textarea>
          <button>Submit</button>
        </form>
       
      </div>
    </section>
  )
}
