import '../styles/Contact.css'
import React, { useState } from 'react'

function Contact() {

    const [comentario, setComentario] = useState({
        nombre: "",
        email: "",
        whatsapp: "",
        asunto:"",
        mensaje:""
    })

    const handleInputChange= (e)=>{
        setComentario({
            ...comentario,
            [e.target.name]: e.target.value
        })
        
    console.log(comentario);
    }

    const handleForm = (e)=>{
        e.prevent.default();
    }

  return (
    <div className="Contact-container">
        <div className="Contact-div">
            <h2 className="Contact-h2">Contacto</h2>
            <form action="" onSubmit={handleForm} className='Contact-form'>
                <div className='Contact-box'>
                    <div className='Contact-input'>
                        <label htmlFor="nombre" >Nombre:</label>
                        <input type="input" name="nombre" id="nombre" placeholder='Nombre' onChange={handleInputChange} />
                    </div>
                    <div className='Contact-input'>
                        <label htmlFor="email" >Email:</label>
                        <input type="input" name="email" id="email" placeholder='Email' onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='Contact-box'>
                    <div className='Contact-input'>
                        <label htmlFor="whatsapp" >WhatsApp: </label>
                        <input  type="input" name="whatsapp" id="whatsapp" placeholder='+54 1122336633' onChange={handleInputChange}/>
                    </div>
                    <div className='Contact-input'>
                        <label htmlFor="asunto">Asunto: </label>
                        <input type="input" name="asunto" id="asunto" placeholder='Asunto' onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='Contact-input2'>
                    <label htmlFor="mensaje">Mensaje: </label>
                    <textarea className="Contact-textarea" type="input" name="mensaje" id="mensaje" placeholder='Tu mensaje' onChange={handleInputChange}/>
                <button type="submit" className='Contact-button'>Enviar</button>
                </div>
            </form>
        </div>
        <div className="Contact-div2">ffff</div>
    </div>
  );
}

export default Contact