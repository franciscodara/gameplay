import React, {ReactNode} from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
    children: ReactNode;
}

export function Avatar() {
    return (
        <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary80]}
        >

        </LinearGradient>
    )    
}