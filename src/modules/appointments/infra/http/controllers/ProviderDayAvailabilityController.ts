import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayService from '@modules/appointments/services/ListProviderDayService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, year, month } = request.body;

    const listProviderDay = container.resolve(ListProviderDayService);

    const availability = await listProviderDay.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
