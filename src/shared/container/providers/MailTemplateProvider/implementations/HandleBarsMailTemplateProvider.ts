import handleBars from 'handlebars';
import fs from 'fs';

import IMailTemplateProvider from '../models/iMailTemplateProvider';
import IParseMailTemplateDTO from '../dtos/iParseMailTemplate';

class HandleBarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handleBars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandleBarsMailTemplateProvider;
