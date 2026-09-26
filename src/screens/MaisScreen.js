import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import GlassCard from '../components/GlassCard';
import { colors, gradients, spacing, typography } from '../theme/theme';

const ITEMS = [
  { icon: 'settings', label: 'Configurações' },
  { icon: 'bell', label: 'Notificações' },
  { icon: 'help-circle', label: 'Ajuda e Suporte' },
  { icon: 'log-out', label: 'Sair' },
];

export default function MaisScreen() {
  return (
    <View style={styles.screen}>
      <LinearGradient colors={gradients.background} style={StyleSheet.absoluteFill} />
      <View style={styles.content}>
        <Text style={styles.brand}>Pressio</Text>
        <Text style={styles.subtitle}>Mais Opções</Text>
        <GlassCard style={styles.card}>
          {ITEMS.map((item) => (
            <View key={item.label} style={styles.row}>
              <Feather name={item.icon} size={16} color={colors.textPrimary} />
              <Text style={styles.rowLabel}>{item.label}</Text>
            </View>
          ))}
        </GlassCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { flex: 1, padding: spacing.lg, paddingTop: spacing.xxl, gap: spacing.lg },
  brand: typography.brand,
  subtitle: { ...typography.label, marginTop: 2, marginBottom: spacing.md },
  card: { gap: spacing.lg },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  rowLabel: { ...typography.label, color: colors.textPrimary, fontSize: 14 },
});
