import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { provideHttpClient } from '@angular/common/http';
import { UserRepository } from "../domain/repositories/user.repository";
import { UserLoginUseCase } from "../domain/usecases/Auth/user-login.usecase";
import { UserRegisterUseCase } from "../domain/usecases/Auth/user-register.usecase";
import { ForgotPasswordUseCase } from "../domain/usecases/Auth/forgot-password.usecase";
import { VerifyEmailUseCase } from "../domain/usecases/Auth/verify-email.usecase";
import { GetUserProfleUseCase } from "../domain/usecases/Auth/get-user-profile.usecase";


const userLoginUseCaseFactory = (userRepo: UserRepository) => new UserLoginUseCase(userRepo);
export const userLoginUseCaseProvider = {
    provide: UserLoginUseCase,
    useFactory: userLoginUseCaseFactory,
    deps: [UserRepository]
};

const userRegisterUseCaseFactory = (userRepo: UserRepository) => new UserRegisterUseCase(userRepo);
export const userRegisterUseCaseProvider = {
    provide: UserRegisterUseCase,
    useFactory: userRegisterUseCaseFactory,
    deps: [UserRepository]
};

const forgotPasswordUseCaseFactory = (userRepo: UserRepository) => new ForgotPasswordUseCase(userRepo);
export const forgotPasswordUseCaseProvider = {
    provide: ForgotPasswordUseCase,
    useFactory: forgotPasswordUseCaseFactory,
    deps: [UserRepository]
};

const verifyEmailUseCaseFactory = (userRepo: UserRepository) => new VerifyEmailUseCase(userRepo);
export const verifyEmailUseCaseProvider = {
    provide: VerifyEmailUseCase,
    useFactory: verifyEmailUseCaseFactory,
    deps: [UserRepository]
};

const getUserProfileUseCaseFactory = (userRepo: UserRepository) => new GetUserProfleUseCase(userRepo);
export const getUserProfileUseCaseProvider = {
    provide: GetUserProfleUseCase,
    useFactory: getUserProfileUseCaseFactory,
    deps: [UserRepository],
};

@NgModule({
    providers: [
        userLoginUseCaseProvider,
        userRegisterUseCaseProvider,
        forgotPasswordUseCaseProvider,
        verifyEmailUseCaseProvider,
        provideHttpClient()
    ],
    imports: [
        CommonModule,
    ]
})
export class DataModule { }