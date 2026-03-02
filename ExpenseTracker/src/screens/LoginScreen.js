import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import AppLogo from '../components/AppLogo';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { colors, spacing, radius } from '../theme/colors';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('assenedavida@email.com');
  const [password, setPassword] = useState('assenedavida123');

  return (
    <KeyboardAvoidingView
      style={styles.bg}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <AppLogo size={58} />

          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <InputField
              iconName="mail-outline"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={[styles.label, { marginTop: spacing.md }]}>Password</Text>
            <InputField
              iconName="lock-closed-outline"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.forgotWrapper}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton
            title="Login"
            onPress={() => {}}
            showArrow={false}
            style={styles.btn}
          />

          <View style={styles.row}>
            <Text style={styles.rowText}>{"Don't have an account? "}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    width: '100%',
    alignSelf: 'center',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginTop: spacing.md,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },
  form: {
    width: '100%',
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 6,
  },
  forgotWrapper: {
    alignSelf: 'flex-end',
    marginTop: spacing.sm,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
  btn: {
    width: '100%',
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rowText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});