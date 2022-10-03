import React from 'react'
import { Formik, FormikValues } from 'formik'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import InputMask from './InputMask';
import '../styles/ComponentStyles/RegisterForm.css'
import Input from './Input';
type RegisterFormProps = {
    className?: string
    initialValues?: any
    submitForm?: void
}
export const standarValues = {
 'nome' : '',
 'email': '',
 'nascimento' : '',
 'telefone': '',
}
const RegisterForm = ({
    className,
    submitForm,
    initialValues

}: RegisterFormProps) => {
    return (
        <div className="form-grid">
            <Formik
                initialValues={initialValues || standarValues}
                onSubmit={(values: FormikValues) => console.log(values)}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField 
                            className="form-input"
                            variant="standard"
                            name="nome"
                            label="Nome"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField 
                            classes={{root: "form-input"}}
                            variant="standard"
                            name="email"
                            label="E-mail"
                        />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <InputMask 
                            className="form-input"
                            mask="00/00/0000"
                            variant="standard"
                            label="Nascimento"
                            name="nascimento"
                        />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <InputMask 
                            className="form-input"
                            mask="(00) 0 0000-0000"
                            variant="standard"
                            name="telefone"
                            label="Telefone"
                        />
                        </Grid>
                        <Input/>
                        
                    </Grid>
                            )}
            </Formik>

        </div>
    )
}
export default RegisterForm