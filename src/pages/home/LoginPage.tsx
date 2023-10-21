import React from "react";
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
import BouncyCheckbox from "react-native-bouncy-checkbox/build/dist/BouncyCheckbox";
import {SCREENS} from "../../helpers/constants";


const LoginPage = ({navigation}) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle={"dark-content"} animated={true}/>
            <View style={styles.container}>
                <Image source={require('../../assets2/logo.png')} style={styles.logo}/>
                <Image source={require('AwesomeProject/src/assets2/VnCare.png')} style={styles.logo2}/>
                {/*<Image source={require('../assets/images/Sally4.png')} style={styles.logo2}/>*/}

            </View>
            <View style={[{paddingHorizontal: 10}]}>
                <Text style={styles.textLogin}>Đăng nhập</Text>
                <View>
                    <Text style={styles.textChangeNumberPhone}>Thay số điện thoại?</Text>
                </View>
                <View>
                    <Text style={styles.textInput}> Số điện thoại</Text>
                    <TextInput style={styles.formGroup} placeholder={"Nhập số điện thoại"}/>
                </View>
                <View>
                    <Text style={styles.textInput}> Mật khẩu</Text>
                    <TextInput style={styles.formGroup}
                               placeholder={"Nhập mật khẩu "}
                               secureTextEntry={true}/>
                </View>
                <View style={styles.forgotPasswordContainer}>
                    <BouncyCheckbox
                        size={20}
                        text="Ghi nhớ"
                        unfillColor="#0083FF"
                        fillColor="#0083FF"
                        onPress={(isChecked: boolean) => {
                        }}/>

                    <Text style={styles.textForgotPassword}>Quên mật khẩu?</Text>
                </View>
                <View style={styles.btnLogin}>
                    <Button title={"Đăng nhập"} color={styles.btnLogin.color}
                            onPress={() => navigation.navigate(SCREENS.MESSAGE)}/>
                </View>
                <View style={styles.btnSignUp}>
                    <TouchableOpacity>
                        <Text style={styles.btnSignUpText}
                              onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
                            Đăng ký
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,

    },
    logo: {
        width: 80,
        height: 80,
    },
    logo2: {
        width: 152.222,
        height: 31.47,
        marginTop: 20
    },
    statusBar: {
        backgroundColor: "#3BCCBB"
    },
    textLogin: {
        fontSize: 17,
        color: "black",
        textAlign: "center",
        marginTop: 40,
        fontWeight: "500",
        lineHeight: 18
    },
    textChangeNumberPhone: {
        fontSize: 13,
        color: "#0083FF",
        textAlign: "right",
        marginTop: 40,
        marginBottom: 20,
        fontWeight: "500",
    },
    textInput: {
        fontSize: 13,
        color: "#CBCBCB",
        textAlign: "left",
        fontStyle: "normal"
    },
    forgotPasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        // marginTop: 40,

    },
    textForgotPassword: {
        fontSize: 13,
        color: "#0083FF",
        textAlign: "right",
        fontWeight: "500",
    },
    formGroup: {
        fontSize: 15,
        fontStyle: "italic",
        color: "#AFAFAF",
        fontWeight: "400",

    },
    btnLogin: {
        color: "#3BCCBB",
        marginTop: 40,
        backgroundColor: "red",
        borderRadius: 5,
        overflow: "hidden",
    },
    btnSignUp: {
        marginTop: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#3BCCBB",
        height: 35

    },
    btnSignUpText: {
        color: "#3BCCBB",
        textAlign: "center",
        paddingTop: 4,
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: "600"
    }

});

export default LoginPage