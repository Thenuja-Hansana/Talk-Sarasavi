import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useAuthStore } from '@/features/auth/auth-store';
import { GoogleSignInButton } from '@/features/auth/components/GoogleSignInButton';
import { AppleSignInButton } from '@/features/auth/components/AppleSignInButton';

export default function SignInScreen() {
  const { signInWithGoogle, signInWithApple, isLoading, error } = useAuthStore();

  React.useEffect(() => {
    if (error) {
      Alert.alert('Sign In Error', error);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue your journey</Text>
      </View>

      <View style={styles.buttonContainer}>
        <GoogleSignInButton onPress={signInWithGoogle} isLoading={isLoading} />
        <AppleSignInButton onPress={signInWithApple} isLoading={isLoading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 24,
  },
  header: {
    marginTop: 100,
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  buttonContainer: {
    width: '100%',
  },
});
