import { IsEmail, IsNotEmpty, IsString, validate } from 'class-validator';

// define type
export class AuthDTO {
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password must not be empty' })
  password: string;
}
