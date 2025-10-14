// src/components/OrcamentoCard/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"; // Importa os estilos locais

type OrcamentoCardProps = {
  selectedMonth: string;
}

export function OrcamentoCard({ selectedMonth }: OrcamentoCardProps) {
  return (
    <View style={styles.budgetCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{selectedMonth.toUpperCase()} / 2025</Text>
        <Ionicons name="settings-outline" size={20} color="#fff" />
      </View>
      <Text style={styles.cardSubtitle}>Orçamento disponível</Text>

      <TouchableOpacity style={styles.budgetButton} onPress={() => router.push("/orcamentoMensal")}> 
        <Text style={styles.orcamentotButtonText}>Definir orçamento</Text>
      </TouchableOpacity>

      <View style={styles.cardFooter}>
        <Text style={styles.cardFooterText}>Usado{"\n"}R$ 0,00</Text>
        <Text style={styles.cardFooterText}>Limite{"\n"}∞</Text>
      </View>
    </View>
  );
}
export default OrcamentoCard