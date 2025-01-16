import UserModel from '../db/model/user.model.js'
import UserRepository from '../../domain/repositories/UserRepository.js'

class UserRepositoryImpl extends UserRepository {
    async findByEmail(email) {
        return UserModel.findOne({ email });
    }

    async save(user) {
        const userDocument = new UserModel(user);
        return userDocument.save();
    }
}

export default class UserRepositoryImpl {
}