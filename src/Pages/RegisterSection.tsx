import React from 'react'
import RegisterForm from '../Components/RegisterForm';
import '../styles/PageStyles/RegisterSection.css'

type RegisterSectionProps = {
    className?: string;
}
const RegisterSection = ({ className }: RegisterSectionProps) => {
    
  
    return (
        <div className='register-section-container'>
            <div className="form-container">
                <h1>CADASTRO</h1>
                <RegisterForm/>

            </div>
            
        </div>
    )
}

export default RegisterSection
   