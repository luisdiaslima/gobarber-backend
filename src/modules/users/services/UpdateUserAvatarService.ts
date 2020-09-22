import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/iStorageProvider';
import IUsersRepository from '../repositories/iUsersRepository';

import User from '../infra/typeorm/entities/User';
/* eslint-disable camelcase */
interface IRequest {
  user_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      // Deletar avatar anterior

      await this.storageProvider.deleteFile(user.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    // Define o avatar

    user.avatar = filename;

    // Salva o avatar na base de dados

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
