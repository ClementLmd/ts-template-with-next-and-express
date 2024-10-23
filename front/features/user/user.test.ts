import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';
import { fetchUsers } from './user.thunks';
import { selectUsers } from './user.selectors';

describe('User slice', () => {
  const mockUsers = [
    { id: 1, firstname: 'John', lastname: 'Doe' },
    { id: 2, firstname: 'Jane', lastname: 'Doe' },
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

    mockFetch.mockRestore();
  });
});
