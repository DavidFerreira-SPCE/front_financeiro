import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react';
import { Text, View } from "react-native";
import { styles } from "../lancamentosList/styles"; // Importa os estilos locais

export function lancamentosList() {
  // No futuro, você pode receber os dados via props
  const numeroDeLancamentos = 0;

  return (
    <View style={styles.lancamentos}>
      <View style={styles.lancHeader}>
        <Text style={styles.lancTitle}>LANÇAMENTOS</Text>
        <View style={styles.lancBadge}>
          <Text style={styles.lancBadgeText}>{numeroDeLancamentos}</Text>
        </View>
      </View>

      <View style={styles.lancEmpty}>
        <MaterialCommunityIcons name="note-text-outline" size={30} color="#54f00bff" />
        <Text style={styles.lancEmptyText}>
          Você ainda não registrou despesas ou receitas neste mês
        </Text>
      </View>
    </View>
  );
}

export default lancamentosList