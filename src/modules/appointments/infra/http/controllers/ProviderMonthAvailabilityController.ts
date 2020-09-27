import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthService from '@modules/appointments/services/ListProviderMonthService';

export default class ProvidersMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonth = container.resolve(ListProviderMonthService);

    const availability = await listProviderMonth.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
