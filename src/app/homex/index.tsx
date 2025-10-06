import MonthList from "@/src/components/list";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { months } from "../utils/months";
import { styles } from "./styles";

const [selected, setSelected] = useState(months[0].name);


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/avatar.jpg")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.saudacao}>OLÁ, SR. CAMPARI!</Text>
          <Text style={styles.subtitle}>Vamos organizar suas finanças?</Text>
        </View>
        <TouchableOpacity style={styles.logout}>
          <Text>
            <Ionicons name="exit-outline" size={22} color="#b30000ff"/>  {/*aqui está o botão de sair exit*/}
          </Text>
        </TouchableOpacity>
      </View>

      {/* aqui vai aba dos meses */}
      <View style={styles.monthTabs}>
        <MonthList
          selected={selected}
          onChange={setSelected}
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>

        {/* aqui vai aba Card Orçamento */}
        <View style={styles.budgetCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>MAIO / 2025</Text>
            <Ionicons name="settings-outline" size={20} color="#fff" />
          </View>
          <Text style={styles.cardSubtitle}>Orçamento disponível</Text>

          <TouchableOpacity style={styles.budgetButton}>
            <Text style={styles.orcamentotButtonText}>Definir orçamento</Text>
          </TouchableOpacity>

          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Usado{"\n"}R$ 0,00</Text>
            <Text style={styles.cardFooterText}>Limite{"\n"}∞</Text>
          </View>
        </View>

        {/* aqui vai a parte da aba lançamentos*/}
        <View style={styles.lancamentos}>
          <View style={styles.lancHeader}>
            <Text style={styles.lancTitle}>LANÇAMENTOS</Text>
            <View style={styles.lancBadge}>
              <Text style={styles.lancBadgeText}>0</Text>
            </View>
          </View>

          <View style={styles.lancEmpty}>
            <MaterialCommunityIcons name="note-text-outline" size={30} color="#54f00bff" />
            <Text style={styles.lancEmptyText}>
              Você ainda não registrou despesas ou receitas neste mês
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* aqui vai o ultimo Botão Flutuante */}
      <TouchableOpacity style={styles.flutuante}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}