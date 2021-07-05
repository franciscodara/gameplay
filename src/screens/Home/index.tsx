import React, { Fragment } from "react";
import { Profile } from "../../components/Profile";
import { View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return(
        <View>
            <View style={styles.header}>
                <Profile />
            </View>
        </View>
    );
}