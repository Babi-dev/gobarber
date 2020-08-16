import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordservice from '@modules/users/services/ResetPasswordservice';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(ResetPasswordservice);

    await resetPassword.execute({
      password,
      token,
    });

    return response.status(204).json();
  }
}
