import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Banner, ButtonForm, ErrorMessage, FormWithStyles, InputForm, InputLabel, LabelForm, SuccessMessage } from './styles';

type FormState = {
    username: string;
    email: string;
}

const SuscriptionForm = () => {
    // const navigate = useNavigate();
    const  [form, setForm ] = useState<FormState>({ 
        username: '', 
        email: '' 
    });

    const [message, setMessage] = useState({
        text: "",
        type: "",
        visible: false,
    });

    const showMessage = (text: string, type: "success" | "error") => {
        setMessage({
            text,
            type,
            visible: true,
        });

        setTimeout(() => {
        setMessage((prev) => ({
            ...prev,
            visible: false,
        }));
        }, 4000);
    };

    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const usernameVal = form.username.trim();
        const emailVal = form.email.trim();

        if (usernameVal === "" || emailVal === "") {
            showMessage("Por favor completa todos los campos", "error");
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);

        if (!emailValido) {
            showMessage("Por favor ingresa un correo válido", "error");
            return;
        }

        showMessage("¡Tu información se ha enviado correctamente!", "success");

        setForm({
            username: "",
            email: "",
        });
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    return (
        <Banner role='banner'>
            <FormWithStyles onSubmit={handleSubmit} noValidate role="form" aria-labelledby="Titulo-de-Suscripcion">
                <LabelForm id='Titulo-de-Suscripcion'>FORMULARIO DE SUSCRIPCIÓN</LabelForm>

                <InputLabel htmlFor='username'>Nombre:</InputLabel>
                <InputForm 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Escriba su nombre" 
                value={form.username}
                onChange={(e) => handleInputChange(e)}
                required />

                <InputLabel htmlFor='email'>Correo:</InputLabel>
                <InputForm 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Escriba su correo" 
                value={form.email}
                onChange={(e) => handleInputChange(e)}
                required/>
                  
                <ButtonForm type="submit" aria-label='Enviar formulario de suscripcion' arial-haspopup="dialog">Enviar</ButtonForm>

                {message.visible && (
                    message.type === "success" ? (
                    <SuccessMessage role="dialog">{message.text}</SuccessMessage>
                    ) : (
                        <ErrorMessage role="dialog">{message.text}</ErrorMessage>
                    )
                )}
            </FormWithStyles>
        </Banner>
    )
}

export default SuscriptionForm;