import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header';
import FirstSection from './FirstSection';
import RegisterSection from './RegisterSection';

type HomeProps = {
    className?: string;
}

const Home = ({className}: HomeProps) =>{
    return(
       <div className={className}>
        <FirstSection/>
        <RegisterSection/>
       </div> 
    )
}

export default styled(Home)`
    width: 100%;
    height: 100%;
`