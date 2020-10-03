import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/iStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/iMailProvider';
import EtherelMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/iMailTemplateProvider';
import HandleBarsMailTemplateProvider from './MailTemplateProvider/implementations/HandleBarsMailTemplateProvider';

import ICacheProvider from './CacheProvider/models/iCacheProvider';
import RedisCacheProvider from './CacheProvider/implementations/RedisCacheProvider';

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

container.registerInstance<ICacheProvider>(
  'CacheProvider',
  container.resolve(RedisCacheProvider),
);
