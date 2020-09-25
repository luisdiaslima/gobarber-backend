import 'reflect-metadata';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthService from './ListProviderMonthService';

describe('ListProviders', () => {
  let listProviderMonth: ListProviderMonthService;
  let fakeAppointmentsRepository: FakeAppointmentsRepository;

  beforeEach(() => {
    listProviderMonth = new ListProviderMonthService(
      fakeAppointmentsRepository,
    );
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
  });

  it('should be able to list the month from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    const availability = await listProviderMonth.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: false },
        { day: 22, available: true },
      ]),
    );
  });
});
