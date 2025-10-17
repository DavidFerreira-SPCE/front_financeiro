import { StyleSheet } from "react-native";
import orcamentoMensal from ".";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    color: '#555',
    fontWeight: '600',
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 8,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#d06',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  budgetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  budgetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  budgetRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  yearText: {
    color: '#888',
    fontWeight: '400',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  inactiveText: {
    color: '#ccc',
  },
})

export default orcamentoMensal