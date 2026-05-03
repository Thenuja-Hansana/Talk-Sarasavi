import { Redirect, Tabs } from 'expo-router';
import { useAuthStore } from '@/features/auth/auth-store';
import { ActivityIndicator, View } from 'react-native';

export default function AppLayout() {
  const { user } = useAuthStore();

  if (!user) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2E8B57' }}>
      <Tabs.Screen 
        name="conversation" 
        options={{ 
          title: 'Chat',
        }} 
      />
      <Tabs.Screen 
        name="games" 
        options={{ 
          title: 'Games',
        }} 
      />
      <Tabs.Screen 
        name="progress" 
        options={{ 
          title: 'Progress',
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
        }} 
      />
    </Tabs>
  );
}
