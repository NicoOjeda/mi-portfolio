import '../styles/Contact.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';

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

function handleForm(e){
        e.preventDefault()
        axios.post('http://localhost:8000/comment/',comentario)
        .then(res=> {
            if(res.data.success){
                swal({
                    title: "Enviado",
                text: "Gracias por tu mensaje!",
                icon: "success",
                button: false,
                timer: 3000,
                });
            }
            console.log(res)
        })
        .catch(error=> console.log(error))
    }

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/comment/')
    //     .then(res=> {if(res.data.success){
    //         swal({
    //             title: "Enviado",
    //             text: "Gracias por tu mensaje!",
    //             icon: "success",
    //             button: false,
    //             timer: 3000,
    //         });
    //     }
    // })
    //     .catch(error=> console.log(error))
        
    // },[])

    
  return (
    <div className="Contact-container">
        <div className="Contact-div">
            <h2 className="Contact-h2">Contacto</h2>
            <form onSubmit={handleForm} className='Contact-form'>
                <div className='Contact-box'>
                    <div className='Contact-input'>
                        <label htmlFor="nombre" >Nombre:</label>
                        <input type="text" name="nombre" id="nombre" placeholder='Nombre' onChange={handleInputChange} />
                    </div>
                    <div className='Contact-input'>
                        <label htmlFor="email" >Email:</label>
                        <input type="email" name="email" id="email" placeholder='Email' onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='Contact-box'>
                    <div className='Contact-input'>
                        <label htmlFor="whatsapp" >WhatsApp: </label>
                        <input  type="text" name="whatsapp" id="whatsapp" placeholder='+54 1122336633' onChange={handleInputChange}/>
                    </div>
                    <div className='Contact-input'>
                        <label htmlFor="asunto">Asunto: </label>
                        <input type="text" name="asunto" id="asunto" placeholder='Asunto' onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='Contact-input2'>
                    <label htmlFor="mensaje">Mensaje: </label>
                    <textarea className="Contact-textarea" type="text" name="mensaje" id="mensaje" placeholder='Tu mensaje' onChange={handleInputChange}/>
                <button type="submit" className='Contact-button'>Enviar</button>
                </div>
            </form>
        </div>
        <div className="Contact-div2">ffff</div>
    </div>
  );
}

export default Contact