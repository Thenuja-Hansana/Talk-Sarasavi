import { Redirect, Stack } from 'expo-router';
import { useAuthStore } from '@/features/auth/auth-store';

export default function AuthLayout() {
  const user = useAuthStore((state) => state.user);

  // If user is already authenticated, send them to the app
  if (user) {
    return <Redirect href="/(app)/conversation" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="sign-in" />
    </Stack>
  );
}
