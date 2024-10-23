import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';
import { createUser, fetchUsers } from './user.thunks';
import { selectUsers } from './user.selectors';
import type { User } from '@shared/types/user';

describe('User slice', () => {
  const mockUsers: User[] = [
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'Jane', lastname: 'Doe' },
  ];

  const createTestStore = () =>
    configureStore({
      reducer: {
        users: userReducer,
      },
    });
  it('should fetch users list in redux store', async () => {
    const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockUsers,
    } as Response);

    const store = createTestStore();

    await store.dispatch(fetchUsers());

    const users = selectUsers(store.getState());
    expect(users).toEqual(mockUsers);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/users');

    mockFetch.mockRestore();
  });
  it('should create a new user in database and store it in redux store', async () => {
    const newUser: User = { firstname: 'Jack', lastname: 'Black' };

    const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => newUser,
    } as Response);

    const store = createTestStore();
    const usersBeforeAdd = selectUsers(store.getState());
    expect(usersBeforeAdd).toEqual([]);

    await store.dispatch(createUser(newUser));

    const usersAfterAdd = selectUsers(store.getState());
    expect(usersAfterAdd).toEqual([newUser]);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    mockFetch.mockRestore();
  });
});
