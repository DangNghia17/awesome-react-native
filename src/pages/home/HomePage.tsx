import React from "react";

import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from "react-native";

const HomePage = () => {
    console.log("Bắt đầu HomePage");
    return (
        <ImageBackground
            source={require('AwesomeProject/assets/images/background1.png')}
            style={styles.background}>
            <SafeAreaView style={styles.container}>
                <View style={{paddingHorizontal: 25,}}>
                    <View style={{alignItems: "center",}}>
                        <Image source={require('AwesomeProject/assets/images/Sally4.png')}
                               style={styles.image}/>
                        <Text style={styles.text1}>Welcome Back</Text>
                        <Text style={styles.text2}>Please, Log In.</Text>
                    </View>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Continue</Text>
                    <Image
                        source={require('AwesomeProject/assets/images/chevron-right.png')} // Đặt đường dẫn đến ảnh của bạn
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.text3}>
                    - - - - - - - - - - - - - - - - Or - - - - - - - - - - - - - - - -
                </Text>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText}>
                        Create an account
                    </Text>
                </TouchableOpacity>

            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 900
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 400,
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: -200
    },
    text1: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 20,
        marginTop: -70
    },
    text2: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 40,
        marginBottom: 30

    },
    input: {
        backgroundColor: "white",
        width: "85%",
        height: 70,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        fontWeight: "900"
    },
    button: {
        flexDirection: "row", // Để chữ và biểu tượng SVG sắp xếp theo hàng ngang
        backgroundColor: "#78258b",
        width: "85%",
        height: 70,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    button2: {
        backgroundColor: "#d29bdc",
        width: "85%",
        height: 70,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.27,
        shadowRadius: 6.65,
        elevation: 6,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 10,
    },
    text3: {
        color: "white",
        marginBottom: 10,

    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain", // Đảm bảo kích thước của biểu tượng phù hợp
    },

});


export default HomePage