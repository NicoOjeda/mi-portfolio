import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <>
        <nav className="nav d-flex justify-content-center fixed-top">
            <LinkRouter className="nav-link Navbar-btn m-1" href="#">Home</LinkRouter>
            <LinkRouter className="nav-link Navbar-btn m-1" href="#">Sobre mi</LinkRouter>
            <LinkRouter className="nav-link Navbar-btn m-1" href="#">Proyectos</LinkRouter>
            <LinkRouter className="nav-link Navbar-btn m-1" href="#">Contacto</LinkRouter>
        </nav>
    </>
  )
}
