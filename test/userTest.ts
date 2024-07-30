import { expect } from 'chai';
import mongoose from 'mongoose';
import User from '../src/models/user';
import { connectDB } from '../src/configs/db';

describe('User Model Test', () => {
  before(async () => {
    await connectDB();
  });

  after(async () => {
    await mongoose.connection.close();
  });

  it('should create a new user', async () => {
    const newUser = new User({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    });

    const savedUser = await newUser.save();
    expect(savedUser.name).to.equal("John Doe");
    expect(savedUser.email).to.equal("john@example.com");
  });
});
