import React from 'react'
import { Link as LinkRouter } from "react-router-dom";

export default function Header() {
  return (
    <>
        <nav className="nav justify-content-center">
            <LinkRouter className="nav-link" href="#">Home</LinkRouter>
            <LinkRouter className="nav-link" href="#">Sobre mi</LinkRouter>
            <LinkRouter className="nav-link" href="#">Proyectos</LinkRouter>
            <LinkRouter className="nav-link" href="#">Contacto</LinkRouter>
        </nav>
    </>
  )
}
