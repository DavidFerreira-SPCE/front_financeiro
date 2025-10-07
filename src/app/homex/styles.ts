import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    bottom: 16,
    marginBottom: 28,
    alignSelf: "center",
    backgroundColor: "#000",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;