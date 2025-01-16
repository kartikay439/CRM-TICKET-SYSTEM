import {createContainer, asClass, asFunction} from "awilix"
import UserRepositoryImpl from "../repositories/UserRepositoryImplementation.js"
import loginUser from "../../application/useCases/user.usecase/LoginUser.js"
import registerUser from "../../application/useCases/user.usecase/RegisterUser.js"
import AuthService from "../../domain/services/auth.service.js"
const container = createContainer();


container.register({
    userRepository: asClass(UserRepositoryImpl),
    authService: asClass(AuthService).inject(() => ({
        secret: {

        } })),
    registerUserUseCase: asFunction(registerUser),
    loginUserUseCase: asFunction(loginUser),
});