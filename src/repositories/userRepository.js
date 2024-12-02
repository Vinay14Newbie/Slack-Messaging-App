import User from '../schema/user.js';
import crudRepository from './crudRepository.js';

const userRepository = {
  ...crudRepository(User),
  /**The spread operator expands the returned CRUD methods into userRepository.
  As a result, userRepository now includes all the methods provided by crudRepository(User). */

  getByEmail: async function (email) {
    const user = await User.findOne({ email });
    return user;
  },

  getByUsername: async function (username) {
    const user = await User.findOne({ username });
    return user;
  }
};

export default userRepository;
