import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { colors, spacing, radius } from '../theme/colors';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('assenedavida@email.com');

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
          {/* Back to Login */}
          <TouchableOpacity
            style={styles.backRow}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={16} color={colors.textMuted} />
            <Text style={styles.backText}>Back to Login</Text>
          </TouchableOpacity>

          {/* Mail icon bubble */}
          <View style={styles.iconBubble}>
            <Ionicons name="mail-outline" size={28} color="#fff" />
          </View>

          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Enter your email to receive a reset link.
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <InputField
              iconName="mail-outline"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <PrimaryButton
            title="Send Reset Link"
            onPress={() => {}}
            showArrow={false}
            style={styles.btn}
          />

          {/* Remember password row */}
          <View style={styles.rememberBox}>
            <Text style={styles.rememberText}>Remember your password? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Sign in</Text>
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
    maxWidth: 400,
    alignItems: 'center',
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    marginBottom: spacing.xl,
  },
  backText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  iconBubble: {
    width: 62,
    height: 62,
    borderRadius: 16,
    backgroundColor: colors.gradientMid,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 21,
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
  rememberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: radius.md,
    paddingVertical: 14,
    paddingHorizontal: spacing.md,
    width: '100%',
  },
  rememberText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});