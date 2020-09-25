import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/iStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/iMailProvider';
import EtherelMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/iMailTemplateProvider';
import HandleBarsMailTemplateProvider from './MailTemplateProvider/implementations/HandleBarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandleBarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherelMailProvider),
);
