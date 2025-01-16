import UserModel from '../db/model/user.model.js'
import UserRepository from '../../domain/repositories/UserRepository.js'
import user from "../../domain/entities/User.js";

class UserRepositoryImpl extends UserRepository {
    async findByEmail(email) {
        return UserModel.findOne({ email });
    }

    async save(user) {
        console.log( {
           user
        })
       const userOnDB =await UserModel.create(
           {
               email: user.email,
               password: user.password,
               name: user.name,
           }
       )
        console.log(user+"user on domain model")
        return userOnDB;
    }
}

export default  UserRepositoryImpl