import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    lancamentos: {
        // Se precisar de um fundo ou margem no container, adicione aqui
        // Ex: backgroundColor: "#f9f9f9", marginTop: 16,
    },
    lancHeader: {
        flexDirection: "row",
        alignItems: "center", // Alinha o texto e o badge verticalmente
        justifyContent: "space-between", // Garante que o badge vá para a direita
        marginBottom: 12,
    },
    lancTitle: {
        fontWeight: "bold",
        fontSize: 16, // Um pouco maior para destaque
        color: '#333'
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
        paddingVertical: 40, // Mais espaço vertical
        backgroundColor: '#fafafa',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f0f0f0'
    },
    lancEmptyText: {
        marginTop: 12,
        textAlign: "center",
        color: "#666",
        fontSize: 13,
        maxWidth: '80%', // Evita que o texto encoste nas bordas
    },
});

export default styles