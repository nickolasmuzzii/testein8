import React from 'react'
import { Field, Formik, FormikValues } from 'formik'
import Grid from '@mui/material/Grid'
import '../styles/ComponentStyles/RegisterForm.css'
import Input from './Input';
type RegisterFormProps = {
    className?: string
    initialValues?: any
    submitForm?: void
}
export const standarValues = {
    "nome": 'nomeass',
    "email": '',
    "nascimento": '',
    "telefone": '',
    "teste": ''
}
const RegisterForm = ({
    className,
    submitForm,
    initialValues

}: RegisterFormProps) => {
    return (
        <div className={className || "form-grid"}>
            <Formik
                initialValues={standarValues}
                onSubmit={(values: FormikValues) => console.log(values)}
            >
                {({ handleChange, values }) => (
                    <Grid container spacing={2} className="form-grid">
                        <Grid item xs={12}>
                            <label htmlFor='nome' className="labels"> Nome:</label>
                            <Field
                                className="form-input"
                                variant="standard"
                                name="nome"
                                label="Nome"
                                id="nome"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor='nome' className="labels"> E-mail:</label>
                            <Field
                                className="form-input"
                                variant="standard"
                                name="email"
                                id="email"
                                label="E-mail"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor='nascimento' className="labels"> Nascimento:</label>
                            <Input
                                className="form-input"
                                mask="99/99/9999"
                                onChange={(e: any) => handleChange(e)}
                                name="nascimento"
                                id="nascimento"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <label htmlFor='telefone' className="labels"> Telefone:</label>
                            <Input
                                className="form-input"
                                mask="(99) 9 9999-9999"
                                name="telefone"
                                id="telefone"
                                onChange={(e: any) => handleChange(e)}
                            />
                        </Grid>
                        <div className="btn-div">
                            <button
                                onClick={() => console.log(values)}
                                className="button-register"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </Grid>
                )}

            </Formik>

        </div>
    )
}
export default RegisterForm