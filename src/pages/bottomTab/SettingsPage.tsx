import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const SettingsPage = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image source={require('../../assets2/gear-solid.png')} style={styles.settingImage}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center"}}>Day la page SettingPage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    settingImage:{
        width : 200,
        height:200,
        opacity : 0.3,
        alignSelf : "center",
        marginTop : 50
    }
})
export default SettingsPage