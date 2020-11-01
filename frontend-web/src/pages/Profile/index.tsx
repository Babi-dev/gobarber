import React, { useCallback, useRef, ChangeEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import {
  FiMail,
  FiUser,
  FiLock,
  FiCamera,
  FiArrowLeft,
} from 'react-icons/fi';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AvatarInput,
} from './styles';

interface ProfileFromData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(async (data: ProfileFromData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        old_password: Yup.string(),
        password: Yup.string()
          .when('old_password', {
            is: (value) => !!value.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
        password_confirmation: Yup.string()
          .when('old_password', {
            is: (value) => !!value.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          })
          .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const {
        name,
        email,
        old_password,
        password,
        password_confirmation,
      } = data;

      const formData = {
        name,
        email,
        ...(old_password ? {
          old_password,
          password,
          password_confirmation,
        } : {}),
      };

      const response = await api.put('/profile', formData);

      updateUser(response.data);

      addToast({
        type: 'success',
        title: 'Perfil atualizado!',
        description: 'Suas informações do perfil foram atualizadas com sucesso!',
      });

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Error na atualização',
        description: 'Ocorreu um erro ao atualizar perfil, tente novamente.',
      });
    }
  }, [addToast, updateUser, history]);

  const handleAvatarChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const data = new FormData();
      data.append('avatar', event.target.files[0]);

      api.patch('/users/avatar', data).then((response) => {
        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Avatar atualizado!',
        });
      });
    }
  }, [addToast, updateUser]);

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>
          <Input
            name="name"
            type="text"
            icon={FiUser}
            placeholder="Nome"
          />
          <Input
            name="email"
            type="text"
            icon={FiMail}
            placeholder="E-mail"
          />
          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            type="password"
            icon={FiLock}
            placeholder="Senha atual"
          />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Nova senha"
          />
          <Input
            name="password_confirmation"
            type="password"
            icon={FiLock}
            placeholder="Confirmar senha"
          />
          <Button type="submit">Confirmar mudanças</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
