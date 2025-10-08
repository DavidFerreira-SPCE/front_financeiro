import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    budgetCard: {
        backgroundColor: "#111",
        borderRadius: 12,
        padding: 16,
        // Adicionei margens para não colar nas bordas da tela
        marginHorizontal: 16,
        marginTop: 16,
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
});