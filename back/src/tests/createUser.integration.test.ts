import { UserModel } from '../models/users';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('UserModel test', () => {
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
  it('should create and save a new user', async () => {
    const user = { firstname: 'Jane', lastname: 'Doe' };
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();

    expect(savedUser.firstname).toBe(user.firstname);
    expect(savedUser.lastname).toBe(user.lastname);
  });

  it('with usersRoute', () => {});
});
