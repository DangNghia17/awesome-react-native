import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {MessageModel} from "../../models/message.model";
import {SCREENS} from "../../helpers/constants";

type ItemProps={
    message : MessageModel,
    onPress : () => void
}
const MessagePage = ({navigation}) => {

    const messages = Array<MessageModel>();
    messages.push({
        name : "Nguyen Van A",
        avatar : '../../assets2/logo.png',
        dateOfBirth : new Date(2006,12, 17)
    })
     messages.push({
        name : "Dang Chi Nghia",
        avatar : '../../assets2/logo.png',
        dateOfBirth : new Date(2002,10, 14)
    })
     messages.push({
        name : "Phan Van B",
        avatar : '../../assets2/logo.png',
        dateOfBirth : new Date(1995,3, 5)
    })

    const MessageItem = ({message, onPress} : ItemProps) => (
       <TouchableOpacity onPress={onPress}>
        <View style={styles.listMessage}>
            <Text style={styles.textMessage}>Tên : {message.name}</Text>
            <Text style={styles.textMessage}>Ngày sinh: {message.dateOfBirth.toLocaleDateString()}</Text>
        </View>
       </TouchableOpacity>
    )
    const [messageName, setMessageName] = useState('x')
    const gotoDetail = (name : string) => {
        navigation.navigate(SCREENS.DETAIL,{
            messageName : name
        })
    }

    return (
        <View>
            <TouchableOpacity>
                <Image source={require('../../assets2/message-solid.png')} style={styles.messageImage}/>
            </TouchableOpacity>
            <FlatList
                data={messages}
                renderItem={({item}) => <MessageItem message={item} onPress={() => setMessageName(item.name)}/>}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    messageImage:{
        width : 150,
        height:150,
        opacity : 0.5,
        alignSelf : "center",
        marginTop : 30,
        marginBottom :20,

    },
    listMessage:{
        marginTop:10,

    },
    textMessage:{
        fontSize: 20,
        color: "black"
    }
})
export default MessagePage