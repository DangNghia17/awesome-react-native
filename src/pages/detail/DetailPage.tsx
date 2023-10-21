import {Button, Text, View} from "react-native";
import React from "react";


const DetailPage = ({route, navigation}) => {
    const {messageName} = route.params
    return (
        <View>
            <Text>
                Xin chao {messageName}
            </Text>
            <Button title={"Back"}
                    onPress={navigation.goBack()} />
        </View>
    )
}

export default DetailPage