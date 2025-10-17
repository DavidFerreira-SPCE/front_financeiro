import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {  
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        marginTop:"auto",
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 40,
        padding: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1
    },
    close: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    tipoBtn: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginHorizontal: 5
    },
    selecionadoEntrada: {
        backgroundColor: '#e6fff0',
        borderColor: 'green'
    },
    selecionadoSaida: {
        backgroundColor: '#ffe6e6',
        borderColor: 'red'
    },
    btnSalvar: {
        marginTop: 20,
        backgroundColor: '#c400c4',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center'
    },
    btnSalvarTexto: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default styles