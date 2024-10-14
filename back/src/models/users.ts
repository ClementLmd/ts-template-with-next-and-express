import mongoose from 'mongoose';

export interface User {
  firstname: string;
  lastname: string;
}

const userSchema = new mongoose.Schema<User>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

export const UserModel = mongoose.model('User', userSchema);
