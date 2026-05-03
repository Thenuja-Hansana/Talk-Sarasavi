// Mocking the auth service for Phase B to allow testing in Expo Go
// without needing native Google/Apple client setup right now.
import { User } from '@/shared/models/user.model';

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  signInWithGoogle: async (): Promise<User> => {
    await delay(1000);
    return {
      uid: 'mock-google-uid-123',
      email: 'test@gmail.com',
      displayName: 'Test User',
      level: 1,
      xp: 0,
    };
  },

  signInWithApple: async (): Promise<User> => {
    await delay(1000);
    return {
      uid: 'mock-apple-uid-456',
      email: 'test@icloud.com',
      displayName: 'Apple User',
      level: 1,
      xp: 0,
    };
  },

  signOut: async (): Promise<void> => {
    await delay(500);
  },
};
