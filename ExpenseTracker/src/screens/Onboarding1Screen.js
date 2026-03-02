import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import PaginationDots from '../components/PaginationDots';
import { colors, spacing, radius } from '../theme/colors';

export default function Onboarding1Screen({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <LinearGradient
          colors={['#7B2FBE', '#C728B2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.illustration}
        >
          <Ionicons name="trending-up-outline" size={72} color="#fff" />
        </LinearGradient>

        <Text style={styles.title}>Track Your Expenses Easily</Text>
        <Text style={styles.subtitle}>
          Stay in control of your daily spending and build better financial habits.
        </Text>

        <PaginationDots total={3} active={0} />

        <PrimaryButton
          title="Next"
          onPress={() => navigation.navigate('Onboarding2')}
          style={styles.btn}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
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
  skip: {
    marginTop: spacing.md,
    fontSize: 14,
    color: colors.textMuted,
    paddingBottom: spacing.sm,
  },
});