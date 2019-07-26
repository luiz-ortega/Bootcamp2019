import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {}

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" placeholder="Seu endereço" />
                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha antiga"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Sua nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confrime sua senha nova"
                />

                <button type="button">Atualizar perfil</button>
            </Form>

            <button type="button">Sair do GoBarber</button>
        </Container>
    );
}
