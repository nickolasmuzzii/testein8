import React from 'react'
import Table from '../components/Table'
import '../styles/PageStyles/ListSection.css'
import BtnToTop from '../icons/topo-pag.svg'
import { scrollToHome } from '../utils/ScrollFunctions'

type ListSectionProps = {
    className?: string
}
export const teste = [{
    "nome" : "Nickolas Muzzi",
    "email" : "nickolasmuzzi@gmail.com",
    "nascimento": "04/11/2002",
    "telefone": "(31) 9 8401-7410"
}, {
    "nome" : "Nickolas Muzzi",
    "email" : "nickolasmuzzi@gmail.com",
    "nascimento": "04/11/2002",
    "telefone": "(31) 9 8401-7410"
}]
const ListSection = () => {
    return(
    <div className="list-section">
        <div className="container-list">
        <h1>LISTA DE CADASTRO</h1>
        <Table values={teste}/>
        <img src={BtnToTop} className="btn-top" onClick={() => scrollToHome()}/>


        </div>
    </div>
    )
}
export default ListSection