import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const ProfilePage = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image source={require('../../assets2/id-badge-solid.png')} style={styles.profileImage}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center"}}>Day la page ProfilePage</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    profileImage:{
        width : 200,
        height:200,
        opacity : 0.3,
        alignSelf : "center",
        marginTop : 50
    }
})

export default ProfilePage