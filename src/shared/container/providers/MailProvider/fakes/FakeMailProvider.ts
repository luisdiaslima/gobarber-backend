import IMailProvider from '../models/iMailProvider';
import ISendMailDTO from '../dtos/iSendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(message: ISendMailDTO): Promise<void> {
    this.messages.push(message);
  }
}
