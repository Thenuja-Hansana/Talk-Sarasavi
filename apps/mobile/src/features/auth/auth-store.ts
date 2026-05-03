import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/shared/models/user.model';
import { authService } from '@/core/firebase/auth-service';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  hasSeenOnboarding: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
  completeOnboarding: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      hasSeenOnboarding: false,
      error: null,

      signInWithGoogle: async () => {
        set({ isLoading: true, error: null });
        try {
          const user = await authService.signInWithGoogle();
          set({ user, isLoading: false });
        } catch (error: any) {
          set({ error: error.message || 'Failed to sign in with Google', isLoading: false });
        }
      },

      signInWithApple: async () => {
        set({ isLoading: true, error: null });
        try {
          const user = await authService.signInWithApple();
          set({ user, isLoading: false });
        } catch (error: any) {
          set({ error: error.message || 'Failed to sign in with Apple', isLoading: false });
        }
      },

      signOut: async () => {
        set({ isLoading: true });
        try {
          await authService.signOut();
          set({ user: null, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
        }
      },

      completeOnboarding: () => {
        set({ hasSeenOnboarding: true });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ 
        user: state.user, 
        hasSeenOnboarding: state.hasSeenOnboarding 
      }),
    }
  )
);
