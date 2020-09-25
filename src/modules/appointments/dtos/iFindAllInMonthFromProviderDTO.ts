import IFindallProvidersDTO from '@modules/users/dtos/iFindAllProviders';

export default interface IFindAllInMonthFromProviderDTO {
  provider_id: string;
  month: number;
  year: number;
}
