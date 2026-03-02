import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import PaginationDots from '../components/PaginationDots';
import { colors, spacing, radius } from '../theme/colors';

export default function Onboarding2Screen({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <View style={styles.illustration}>
          <Ionicons name="pie-chart-outline" size={80} color="#fff" />
        </View>

        <Text style={styles.title}>See Where Your Money Goes</Text>
        <Text style={styles.subtitle}>
          Visualize your spending with smart summaries and clean charts.
        </Text>

        <PaginationDots total={3} active={1} />

        <PrimaryButton
          title="Next"
          onPress={() => navigation.navigate('Onboarding3')}
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
    backgroundColor: '#1A2035',
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