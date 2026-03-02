import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius } from '../theme/colors';

export default function PrimaryButton({ title, onPress, showArrow = true, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={styles.text}>{title}</Text>
      {showArrow && (
        <Ionicons name="chevron-forward" size={18} color="#fff" style={styles.icon} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.round,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.55,
    shadowRadius: 14,
    elevation: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  icon: {
    marginLeft: 6,
  },
});