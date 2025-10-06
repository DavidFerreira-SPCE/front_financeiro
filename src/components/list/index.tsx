import months from "@/src/app/utils/months";
import { FlatList } from "react-native";
import Month from "../listOne";
import styles from "./styles";

type props = {
    selected: string;
    onChange: (month: string) => void;
}

export function MonthList({selected, onChange}: props) {
    return(
        <FlatList
            data={[months]} //Quando criar a lista, colocar aqui
            keyExtractor={(item) => item.id} // sÓ Extração
            renderItem={({ item }) => (//gerar a render da lista
                <Month 
                name={item.name} 
                isSelected={item.name === selected}
                onPress={() => onChange(item.name)}/>
            )}

            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        />
    )
};

export default MonthList;