import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1265367512673',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1265367512673');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const appointmentDate = new Date(2020, 7, 15, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '1265367512673',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '1265367512673',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
