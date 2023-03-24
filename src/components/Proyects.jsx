import React from 'react'
import '../styles/Proyects.css'

export default function Proyects() {

    const proyects = [
        {
            id: 1,
            titulo: "Retro Football Team Clothing",
            imagen: "../img/portatil-retro.jpg",
            detalle: "Ecommerce orientado a la venta de indumentaria deportiva estilo vintage.",
            tecnologias: "React - Node js - Express js - Mongo Db - React Native",
            deploy: "https://rftc-web.vercel.app/",
            github: "https://github.com/nehuen-aumedes-diez/Mindhub-Challengue-RFTC-Front#mindhub-challengue-rftc-front",
            mobile: "https://github.com/nehuen-aumedes-diez/Mindhub-Challengue-RFTC-mobile"
        },
        {
            id: 2,
            titulo: "MyTinerary",
            imagen: "../img/portatil-mytinerary.jpg",
            detalle: "Sitio web desarrollado para agencia de eventos. Utilización de filtros combinados, incluyendo búsqueda por nombre y categoría.",
            tecnologias: "React - Node js - Express js - Mongo Db - React Native",
            deploy: "",
            github: "https://github.com/NicoOjeda/my-tinerary-teamdn",
            mobile: "https://github.com/NicoOjeda/mobile-team-dn"
        },
        {
            id: 3,
            titulo: "Mindy Petshop",
            imagen: "../img/portatil-mindy.jpg",
            detalle: "Ecommerce orientado a la venta de productos elaborado. Cuenta con un carrito de compras, muestra foto de los productos y tiene un filtrado por nombre del articulo o por precio del mismo.",
            tecnologias: "Html - Css - Bootstrap - Javascript - Node js - Express js - Mongo Db",
            deploy: "https://mindy-petshop-fawn.vercel.app/",
            github: "https://github.com/NicoOjeda/mindy-petshop"
        },
        {
            id: 4,
            titulo: "Amazing Events",
            imagen: "../img/portatil-amazing.jpg",
            detalle: "Sitio web desarrollado para agencia de eventos. Utilización de filtros combinados, incluyendo búsqueda por nombre y categoría.",
            tecnologias: "Html - Css - Bootstrap - Javascript - Node js - Express js - Mongo Db",
            deploy: "https://amazing-events-mh.vercel.app/",
            github: "https://github.com/NicoOjeda/amazing-events"
        },
        {
            id: 5,
            titulo: "Mighty Ducks",
            imagen: "../img/portatil-hockey.jpg",
            detalle: "Sitio web de liga de hockey aplicando full-responsive design.",
            tecnologias: "Html - Css",
            deploy: "https://mdhl-ojeda.vercel.app/",
            github: "https://github.com/NicoOjeda/Mdhl-Ojeda"
        }
    ]

 console.log(proyects);


return (
    <div className='Proyects-container' id='proyects'>
        <h2 className='Proyects-h2'>Proyectos</h2>
        <div className='Proyects-box'>
            {
                proyects.map((proyect)=>

            <article className='Proyects-proyect' key={proyect.id}>
                <div className='Proyects-one'>
                    <img className="Proyects-img" src={proyect.imagen} alt='amazing'/>
                </div>
                <div className='Proyects-two'>
                    <h4 className='Proyects-h4'>{proyect.titulo}</h4>
                    <p className='Proyects-paragraph'>{proyect.detalle}</p>
                    <p className='Proyects-paragraph'>{proyect.tecnologias}</p>
                    <div className='Proyects-boxbutton'>
                    {
                        proyect.mobile?
                        ( 
                            <>
                            <button className='Proyects-button' onClick={ () => window.open(proyect.deploy)}>Deploy</button>
                            <button className='Proyects-button' onClick={ () => window.open(proyect.github)}>Github</button>
                            <button className='Proyects-button' onClick={ () => window.open(proyect.mobile)}>Mobile</button> 
                            </>
                        ):(
                            <>
                            <button className='Proyects-button' onClick={ () => window.open(proyect.deploy)}>Deploy</button>
                            <button className='Proyects-button' onClick={ () => window.open(proyect.github)}>Github</button>
                            </>
                        )
                    } 
                    </div>
                </div>
            </article>
            )}
        </div>
    </div>
  )
}
