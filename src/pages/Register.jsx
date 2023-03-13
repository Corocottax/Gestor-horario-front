import { Button, FormLabel, Input } from '@chakra-ui/react';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { registerStrategy } from '../redux/starter/starter.actions';

const Register = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = (data) => {

        console.log(data);

        const formData = new FormData();
        formData.append("userName", data.userName);
        formData.append("password", data.password);
        formData.append("photo", data.photo[0]);

        registerStrategy(formData, data, navigate);

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FormLabel>Nombre de usuario</FormLabel>
            <Input {...register("userName")} />
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" {...register("password")} />
            <FormLabel>Imagen de perfil</FormLabel>
            <Input type="file" {...register("photo")} />
            <Button type='submit'>Enviar</Button>
        </form>
    )
}

export default Register