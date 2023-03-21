import React from 'react'
import '../styles/About.css'
import Tecnologies from './Tecnologies'

export default function About() {
  return (
    <>
      <div className='About-container'>
        <h2 className='About-h2'>Sobre mi</h2>
        <div className='d-flex'>
          <section className='About-sobremi'>
            <p className='About-parrafo'>Mi nombre es Nicolás Ojeda de Buenos Aires, Argentina. Soy resolutivo, organizado y responsable.
            Tengo experiencia trabajando en equipos en diferentes sectores, por lo que me adapto fácilmente.</p>
            <p className='About-parrafo'>Me egrese como desarrollador Fullstack MERN del Bootcamp de MindHub LA de +700hs, en el cual simulamos un ambiente laboral real desarrollando diversos proyectos tanto grupales como individuales.
            Actualmente me encuentro cursando una Tecnicatura Universitaria en Desarrollo Web en la Universidad de Entre Ríos.</p>
            <p className='About-parrafo'>Estoy buscando una oportunidad para poder aportar todos los conocimientos y habilidades adquiridas en este tiempo, y también aprender cosas nuevas.</p>
          </section>
          <div className='About-photobox'>
            <img className='About-photo' src='../img/foto.jpg' alt='mi-foto'/>
          </div>
        </div>
        <Tecnologies/>
      </div>
    </>
  )
}
