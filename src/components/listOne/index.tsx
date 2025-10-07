import { Pressable, PressableProps, Text, View } from "react-native";
import styles from './styles';


type props = PressableProps & {
    name: string;
    isSelected?: boolean;
}

export function Month({ name, isSelected = false, ...rest }: props) {
    const color = isSelected? "#d000ecf8" : "black";
//Para realizar destaque do MÊS no APP financeiro
    return (
        <Pressable style={styles.container} {...rest}>
            <Text style={[styles.name, {color}]}>{name}</Text>
            {isSelected && <View style={styles.line} />}
        </Pressable>
    )
}

export default Month;