import { Messages } from '@/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordUserDto {
  @IsNotEmpty({ message: Messages.required('currentPassword') })
  @IsString({ message: Messages.string('currentPassword') })
  currentPassword: string;

  @IsNotEmpty({ message: Messages.required('password') })
  @IsString({ message: Messages.string('password') })
  password: string;
}
