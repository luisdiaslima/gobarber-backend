import IFindallProvidersDTO from '@modules/users/dtos/iFindAllProviders';

export default interface IFindAllMonthFromProviderDTO {
  provider_id: string;
  month: number;
  year: number;
}
