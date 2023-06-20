import { CreateUserService } from '@/users/services/create-user/create-user.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { mockPrismaService } from './prisma';
import {
  mockCreateUser,
  mockFindAllUsers,
  mockFindOneUser,
  mockUpdateUser,
} from './users';
import { UpdateUserService } from '@/users/services/update-user/update-user.service';
import { FindAllUsersService } from '@/users/services/find-all-users/find-all-users.service';
import { FindOneUserService } from '@/users/services/find-one-user/find-one-user.service';

const servicesMocks = [
  {
    provide: PrismaService,
    useValue: mockPrismaService,
  },

  // Users
  {
    provide: CreateUserService,
    useValue: mockCreateUser,
  },
  {
    provide: UpdateUserService,
    useValue: mockUpdateUser,
  },
  {
    provide: FindOneUserService,
    useValue: mockFindOneUser,
  },
  {
    provide: FindAllUsersService,
    useValue: mockFindAllUsers,
  },
];

export { servicesMocks };
