import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import GlassCard from '../components/GlassCard';
import { colors, gradients, spacing, typography } from '../theme/theme';
import { useReadings } from '../data/ReadingsContext';

export default function PerfilScreen() {
  const { userName } = useReadings();
  return (
    <View style={styles.screen}>
      <LinearGradient colors={gradients.background} style={StyleSheet.absoluteFill} />
      <View style={styles.content}>
        <Text style={styles.brand}>Pressio</Text>
        <Text style={styles.subtitle}>Perfil</Text>
        <GlassCard style={styles.card}>
          <Feather name="user" size={28} color={colors.accentBlue} />
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.hint}>
            Em breve: metas de saúde, dados pessoais e preferências de notificação.
          </Text>
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
  card: { alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.xl },
  name: { ...typography.h1 },
  hint: { ...typography.label, textAlign: 'center' },
});
