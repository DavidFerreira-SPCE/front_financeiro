import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

export function orcamentoMensal() {
  const [orcamentos, setOrcamentos] = useState([
    { mes: 'Junho', ano: 2025, valor: 4500, ativo: true },
    { mes: 'Maio', ano: 2025, valor: 4200, ativo: true },
    { mes: 'Abril', ano: 2025, valor: 4500, ativo: true },
    { mes: 'Março', ano: 2025, valor: 4200, ativo: true },
    { mes: 'Fevereiro', ano: 2025, valor: 4500, ativo: true },
    { mes: 'Janeiro', ano: 2025, valor: 4500, ativo: true },
    { mes: 'Dezembro', ano: 2024, valor: 4800, ativo: false },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORÇAMENTOS MENSAIS</Text>
      <Text style={styles.subtitle}>Organize seus limites de gastos por mês</Text>

      {/* tela Novo orçamento */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>NOVO ORÇAMENTO</Text>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="00/0000"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="R$ 0,00"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de orçamentos */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>ORÇAMENTOS CADASTRADOS</Text>

        <FlatList
          data={orcamentos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.budgetItem}>
              <View style={styles.budgetLeft}>
                <Ionicons
                  name="calendar-outline"
                  size={18}
                  color={item.ativo ? '#000' : '#ccc'}
                  style={{ marginRight: 8 }}
                />
                <Text style={[styles.monthText, !item.ativo && styles.inactiveText]}>
                  {item.mes} <Text style={styles.yearText}>{item.ano}</Text>
                </Text>
              </View>
              <View style={styles.budgetRight}>
                <Text style={[styles.amountText, !item.ativo && styles.inactiveText]}>
                  R$ {item.valor.toFixed(2).replace('.', ',')}
                </Text>
                {item.ativo && (
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={18} color="#d06" style={{ marginLeft: 12 }} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
export default orcamentoMensal