import { IsEmail, IsInt, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

const defaultOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10,
};

export class CreateUserDto {
    @IsInt()
    @IsNotEmpty()
    employeeNumber: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword(defaultOptions)
    passwordHash: string;

    @IsInt()
    roleId: number;
}

// Role:
// @IsEnum(['Director', 'Manager', 'Sales Person', 'Receptionist'], {
//     message: 'Valid role required'
// })
// role: 'Director' | 'Manager' | 'Sales Person' | 'Receptionist';