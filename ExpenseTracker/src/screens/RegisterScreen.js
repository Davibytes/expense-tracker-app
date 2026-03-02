import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import AppLogo from '../components/AppLogo';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { colors, spacing, radius } from '../theme/colors';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('Assene Davida');
  const [email, setEmail] = useState('assenedavida@email.com');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.bg}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <AppLogo size={58} />

          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Start tracking your expenses today</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>
            <InputField
              iconName="person-outline"
              placeholder="Enter your full name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            <Text style={[styles.label, { marginTop: spacing.md }]}>Email</Text>
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
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Text style={[styles.label, { marginTop: spacing.md }]}>Confirm Password</Text>
            <InputField
              iconName="lock-closed-outline"
              placeholder="Confirm your password"
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry
            />
          </View>

          <PrimaryButton
            title="Sign Up"
            onPress={() => navigation.navigate('Login')}
            showArrow={false}
            style={styles.btn}
          />

          <View style={styles.row}>
            <Text style={styles.rowText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Login</Text>
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
    paddingVertical: spacing.xl,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    width: '100%',
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