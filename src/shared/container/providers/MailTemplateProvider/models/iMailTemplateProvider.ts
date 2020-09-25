import IParseMailTemplateDTO from '../dtos/iParseMailTemplate';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
