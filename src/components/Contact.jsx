import '../styles/Contact.css'
import React from 'react'

function Contact() {
  return (
    <div className="Contact-container">
        <div className="Contact-div">
            <h2 className="Contact-h2">Contacto</h2>
            <form action="" className='Contact-form'>
                <div className='Contact-box'>
                    <div className='Contact-input'>
                        <label htmlFor="nombre" >Nombre:</label>
                        <input type="input" name="nombre" id="nombre" placeholder='Nombre' />
                    </div>
                    <div className='Contact-input'>
                        <label htmlFor="email" >Email:</label>
                        <input type="input" name="email" id="email" placeholder='Email'/>
                    </div>
                </div>
                <div className='Contact-box'>
                    <div className='Contact-input'>
                        <label htmlFor="whatsapp" >WhatsApp: </label>
                        <input  type="input" name="whatsapp" id="whatsapp" placeholder='+54 1122336633'/>
                    </div>
                    <div className='Contact-input'>
                        <label htmlFor="Asunto">Asunto: </label>
                        <input type="input" name="whatsapp" id="whatsapp" placeholder='Asunto'/>
                    </div>
                </div>
                <div className='Contact-input2'>
                    <label htmlFor="mensaje">Mensaje: </label>
                    <textarea className="Contact-textarea" type="input" name="mensaje" id="mensaje" placeholder='Tu mensaje'/>
                <button className='Contact-button'>Enviar</button>
                </div>
            </form>
        </div>
        <div className="Contact-div2">ffff</div>
    </div>
  );
}

export default Contact