import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

const mockHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockAddToast = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn,
  }),
}));

jest.mock('../../hooks/toast', () => ({
  useToast: () => ({
    addToast: mockAddToast,
  }),
}));

describe('SignIn Page', () => {
  beforeEach(() => {
    mockHistoryPush.mockClear();
  });

  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailFild = getByPlaceholderText('E-mail');
    const passwordFild = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailFild, { target: { value: 'johndow@example.com' } });
    fireEvent.change(passwordFild, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailFild = getByPlaceholderText('E-mail');
    const passwordFild = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailFild, { target: { value: 'not-valid-email' } });
    fireEvent.change(passwordFild, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if login fails', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailFild = getByPlaceholderText('E-mail');
    const passwordFild = getByPlaceholderText('Senha');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailFild, { target: { value: 'johndow@example.com' } });
    fireEvent.change(passwordFild, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockAddToast).toHaveBeenCalledWith(expect.objectContaining({
        type: 'error',
      }));
    });
  });
});
