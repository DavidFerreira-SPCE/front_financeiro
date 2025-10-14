// ADICIONE este import no topo do arquivo:
import { styles } from '@/src/app/homex/styles';
import LancamentosList from "@/src/components/lancamentosList";
import MonthList from "@/src/components/list";
import ModalNovoLancamento from "@/src/components/modal";
import OrcamentoCard from "@/src/components/orcamentoCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { months } from "../utils/months";

export default function HomeScreen() {
  const [selected, setSelected] = useState(months && months.length > 0 ? months[0].name : '');
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Você está deslogando...',
      'Deseja realmente fazer isso?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
          style: 'cancel'
        },
        {
          text: 'Deslogar',
          onPress: () => router.back(),
          style: 'destructive'
        }
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/avatar.jpg")}
          style={styles.avatar || { width: 50, height: 50, borderRadius: 25 }}
        />
        <View>
          <Text style={styles.saudacao}>OLÁ, SR. CAMPARI!</Text>
          <Text style={styles.subtitle}>Vamos organizar suas finanças?</Text>
        </View>
        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <Ionicons name="exit-outline" size={22} color="#b30000ff" />
        </TouchableOpacity>
      </View>

      {/* Aba dos meses */}
      <View style={styles.monthTabs}>
        <MonthList
          selected={selected}
          onChange={setSelected}
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <OrcamentoCard selectedMonth={selected} />
        <LancamentosList />
      </ScrollView>

      {/* Botão Flutuante */}
      <TouchableOpacity style={styles.flutuante} onPress={() => setMostrarModal(true)}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Adicione logo abaixo do botão: */}
      <ModalNovoLancamento visible={mostrarModal} onClose={() => setMostrarModal(false)} />
    </View>
  );
}