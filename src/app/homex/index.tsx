import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/avatar.jpg")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.saudacao}>OLÁ, SR. CAMPARI !</Text>
          <Text style={styles.subtitle}>Vamos organizar suas finanças?</Text>
        </View>
        <TouchableOpacity style={styles.logout}>
          <Ionicons name="exit-outline" size={22} color="#b30000ff" />  {/*aqui está o botão de sair exit*/}
        </TouchableOpacity>
      </View>

      {/* aqui vai aba dos meses */}
      <View style={styles.monthTabs}>
        {["MAR", "ABR", "MAI", "JUN", "JUL"].map((mes, index) => (
          <TouchableOpacity key={index} style={mes === "MAI" ? styles.activeTab : styles.tab}>
            <Text style={mes === "MAI" ? styles.activeTabText : styles.tabText}>{mes}</Text>
          </TouchableOpacity>
        ))}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f6f6",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  saudacao: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
  },
  logout: {
    marginLeft: "auto",
  },
  monthTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 6,
  },
  tabText: {
    fontSize: 14,
    color: "#888",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#a020f0",
    paddingVertical: 6,
  },
  activeTabText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#a020f0",
  },
  budgetCard: {
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  cardSubtitle: {
    color: "#aaa",
    marginBottom: 12,
  },
  budgetButton: {
    backgroundColor: "#a020f0",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  orcamentotButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardFooterText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  lancamentos: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  lancHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  lancTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  lancBadge: {
    backgroundColor: "#eee",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  lancBadgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  lancEmpty: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  lancEmptyText: {
    marginTop: 8,
    textAlign: "center",
    color: "#666",
    fontSize: 13,
  },
  flutuante: {
    position: "absolute",
    bottom: 24,
    alignSelf: "center",
    backgroundColor: "#000",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});