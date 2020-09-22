import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/iStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

// import IMailProvider from './MailProvider/models/iMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
