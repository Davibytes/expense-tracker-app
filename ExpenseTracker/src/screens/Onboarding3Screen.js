import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import PaginationDots from '../components/PaginationDots';
import { colors, spacing, radius } from '../theme/colors';

export default function Onboarding3Screen({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <LinearGradient
          colors={['#9B3FC4', '#7B6BCC']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.illustration}
        >
          <Ionicons name="radio-button-on-outline" size={80} color="#fff" />
        </LinearGradient>

        <Text style={styles.title}>Take Control of Your Budget</Text>
        <Text style={styles.subtitle}>Start managing your expenses today.</Text>

        <PaginationDots total={3} active={2} />

        <PrimaryButton
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
          style={styles.btn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  illustration: {
    width: '100%',
    height: 220,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 21,
    paddingHorizontal: spacing.sm,
  },
  btn: {
    width: '100%',
    marginTop: spacing.lg,
  },
});