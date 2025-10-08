import { styles } from "@/src/components/modal/stylesBetano";
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface Props {
    visible: boolean;
    onClose: () => void;
}

export default function ModalNovoLancamento({ visible, onClose }: Props) {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
    const [tipo, setTipo] = useState<'entrada' | 'saida' | null>(null);

    const salvarLancamento = () => {
        console.log({ titulo, categoria, valor, data, tipo });
        onClose(); // fecha o modal
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.title}>NOVO LANÇAMENTO</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.close}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Título da transação"
                        value={titulo}
                        onChangeText={setTitulo}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Categoria"
                        value={categoria}
                        onChangeText={setCategoria}
                    />

                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, { flex: 1, marginRight: 8 }]}
                            placeholder="R$ 0,00"
                            keyboardType="numeric"
                            value={valor}
                            onChangeText={setValor}
                        />
                        <TextInput
                            style={[styles.input, { flex: 1 }]}
                            placeholder="00/00/0000"
                            value={data}
                            onChangeText={setData}
                        />
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[
                                styles.tipoBtn,
                                tipo === 'entrada' && styles.selecionadoEntrada,
                            ]}
                            onPress={() => setTipo('entrada')}
                        >
                            <Text style={{ color: 'green' }}>Entrada ▲</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.tipoBtn,
                                tipo === 'saida' && styles.selecionadoSaida,
                            ]}
                            onPress={() => setTipo('saida')}
                        >
                            <Text style={{ color: 'red' }}>Saída ▼</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.btnSalvar} onPress={salvarLancamento}>
                        <Text style={styles.btnSalvarTexto}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

