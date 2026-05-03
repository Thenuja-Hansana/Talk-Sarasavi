import { Redirect } from 'expo-router';
import { useAuthStore } from '@/features/auth/auth-store';
import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

export default function Index() {
  const [isMounted, setIsMounted] = useState(false);
  const { user, hasSeenOnboarding } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2E8B57" />
      </View>
    );
  }

  if (user) {
    return <Redirect href="/(app)/conversation" />;
  } else if (!hasSeenOnboarding) {
    return <Redirect href="/(auth)/onboarding" />;
  } else {
    return <Redirect href="/(auth)/sign-in" />;
  }
}
