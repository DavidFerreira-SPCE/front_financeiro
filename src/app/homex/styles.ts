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
  }
});

export default styles;