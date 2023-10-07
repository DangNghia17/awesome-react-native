import {
    Button,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox/build/dist/BouncyCheckbox";

const SignUpPage = () => {
    return (
        <SafeAreaView style={{paddingHorizontal: 15}}>
            <StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle={"dark-content"} animated={true}/>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={require('../../assets2/chevron-left-solid.png')} style={styles.arrowLeft}/>
                </TouchableOpacity>
                <Text style={styles.signUpText}> Đăng ký</Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Họ và tên </Text>
                <Text style={styles.requiredStar}>*</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập họ và tên"
                    placeholderTextColor={"#AFAFAF"}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Số điện thoại</Text>
                <Text style={styles.requiredStar}>*</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập số điện thoại"
                    placeholderTextColor={"#AFAFAF"}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Mật khẩu</Text>
                <Text style={styles.requiredStar}>*</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={true}
                    placeholderTextColor={"#AFAFAF"}
                />
                <TouchableOpacity>
                    <Image source={require('../../assets2/eye-slash-solid.png')} style={styles.eyeSlash}/>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Xác nhận mật khẩu</Text>
                <Text style={styles.requiredStar}>*</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập xác nhận mật khẩu"
                    secureTextEntry={true}
                    placeholderTextColor={"#AFAFAF"}
                />
                <TouchableOpacity>
                    <Image source={require('../../assets2/eye-slash-solid.png')} style={styles.eyeSlash}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{marginTop: 20, color: "red", fontWeight: "500"}}>Lưu ý</Text>
            </View>
            <View>
                <Text style={{marginTop: 8, color: "black", fontWeight: "400"}}>Họ tên phải là tên trên các giấy tờ tùy
                    thân như CMND/ CCCD/ Hộ Chiếu</Text>
            </View>
            <View>
                <Text style={{marginTop: 8, color: "black", fontWeight: "400"}}>Mật khẩu phải có độ dài ít nhất 6 ký tự,
                    bao gồm ít nhất:</Text>
            </View>
            <View>
                <Text style={{color: "black"}}>• 1 ký tự hoa</Text>
                <Text style={{color: "black"}}>• 1 ký tự số</Text>
            </View>
            <View style={styles.rememberContainer}>
                <BouncyCheckbox
                    size={20}
                    text=""
                    unfillColor="#0083FF"
                    fillColor="#0083FF"
                    onPress={(isChecked: boolean) => {
                    }}/>
                <Text style={styles.agreeText}>Tôi đã đọc và đồng ý với </Text>
                <Text style={styles.linkText}>Điều khoản sử dụng</Text>
            </View>
            <View style={styles.btnLogin}>
                <Button title={"Đăng ký tài khoản"} color={styles.btnLogin.color}/>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "white"
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 50
    },
    arrowLeft: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    eyeSlash: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginTop : -45
    },
    signUpText: {
        marginLeft: 120,
        color: "black",
        fontSize: 17,
        fontWeight: "500"
    },

    inputContainer: {
        flexDirection: 'row',
    },
    inputLabel: {
        fontSize: 13,
        color: "#757575",
        fontWeight: "600"
    },
    requiredStar: {
        color: 'red',
        fontSize: 16,
        marginRight: 5,
    },
    input: {
        fontSize: 15,
        borderBottomWidth: 0.7,
        borderBottomColor: "#CBCBCB",
        padding: 8,
        fontWeight: "500",
        fontStyle: "italic",
        marginBottom: 16
    },
    rememberContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "stretch",
        marginTop : 10
    },
    agreeText: {
        // marginLeft: -60,
        marginTop: 2,
        color: "black"
    },
    linkText: {
        marginTop: 3,
        color: 'blue',
        textDecorationLine: 'underline',

    },
    btnLogin: {
        color: "#3BCCBB",
        marginTop: 30,
        backgroundColor: "red",
        borderRadius: 5,
        overflow: "hidden",
    },



});


export default SignUpPage