import '../styles/Contact.css'
import React from 'react'

function Contact() {
  return (
    <div className="Contact-container">
        <div className="Contact-div">
            <h2>Contacto</h2>
            <form action="">
                <legend>Tamaño del zumo de fruta</legend>
                <label for="nombre">Nombre</label>
                <input type="input" name="nombre" id="nombre" />
                <label for="email">Email</label>
                <input type="input" name="email" id="email" />
                <label for="whatsapp">WhatsApp</label>
                <input type="input" name="whatsapp" id="whatsapp" />
                <label for="Asunto">Asunto</label>
                <input type="input" name="whatsapp" id="whatsapp" />
                <label for="mensaje">Mensaje</label>
                <textarea type="input" name="mensaje" id="mensaje" />
                <button></button>
            </form>
        </div>
        <div className="Contact-div2">ffff</div>
    </div>
  );
}

export default Contact