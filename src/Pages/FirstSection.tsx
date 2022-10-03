import React from 'react'
import '../styles/PageStyles/FirstSection.css'
type FirstSectionProps = {
    className?: string;
}

const FirstSection = ({ className}:FirstSectionProps) =>{
    return(
        <div className="first-section-container">
            <div className="text-container">
            <h1 className="title1">ESTÁGIO</h1>
            <h1 className="title2">PROVA DE SELEÇÃO</h1>
            </div>

        </div>
    )
}
export default FirstSection