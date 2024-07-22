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
        <div>
            <h2 className="Contact-h2">Contacto</h2>
        </div>
        <div className='Contact-box1'>
            <div className="Contact-div">
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
            <div className="Contact-div2">
                <a href="https://wa.me/+541164849781" className='Contact-redes' target='blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"viewBox="0 0 448 512" target='blank'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg><p className='Contact-p'>Whatsapp</p>
                </a>
                <a href="https://github.com/NicoOjeda" className='Contact-redes'target='blank'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg><p className='Contact-p'>Github</p>
                    </a>
                    <a href='https://www.linkedin.com/in/nicolasojedafs/' className='Contact-redes' target='blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg> <p className='Contact-p'>Linkedin</p> 
                    </a>
                    <a href="https://drive.google.com/file/d/19pHVAyZtw6RzZx-9oeu8z-lEiY23Keey/view?usp=sharing" className='Contact-redes' target='blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin"  viewBox="0 0 384 512" ><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/></svg>
                    <p className='Contact-p'>Ver CV</p>
                    </a>
            </div>
        </div>
    </div>
  );
}

export default Contact