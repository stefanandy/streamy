import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundBlurStack}>
        <ImageBackground
          source={require("../assets/images/ansamblu.png")}
          resizeMode="stretch"
          style={styles.backgroundBlur}
          imageStyle={styles.backgroundBlur_imageStyle}
        >
          <View style={styles.group2Girls}>
            <View style={styles.greyBackgroundGirlsStack}>
              <ImageBackground
                source={require("../assets/images/fundalGri1.png")}
                resizeMode="contain"
                style={styles.greyBackgroundGirls}
                imageStyle={styles.greyBackgroundGirls_imageStyle}
              >
                <View style={styles.withFriendsStack}>
                  <Text style={styles.withFriends}>with friends.</Text>
                  <Text style={styles.shareAccount}>Share account</Text>
                </View>
              </ImageBackground>
              <Image
                source={require("../assets/images/2girls.png")}
                resizeMode="contain"
                style={styles.twoGirls}
              ></Image>
            </View>
          </View>
          <View style={styles.groupBatman}>
            <View style={styles.greyBackgroundBatmanStack}>
              <ImageBackground
                source={require("../assets/images/fundalGri1.png")}
                resizeMode="contain"
                style={styles.greyBackgroundBatman}
                imageStyle={styles.greyBackgroundBatman_imageStyle}
              >
                <Text style={styles.ageIsJust}>Age is just</Text>
                <Text style={styles.aNumber}>a number.</Text>
              </ImageBackground>
              <Image
                source={require("../assets/images/batman.png")}
                resizeMode="contain"
                style={styles.batman}
              ></Image>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.groupHitman}>
          <ImageBackground
            source={require("../assets/images/fundalNegruHitman.png")}
            resizeMode="contain"
            style={styles.blackBackground}
            imageStyle={styles.blackBackground_imageStyle}
          >
            <View style={styles.steflixLogoColumnRow}>
              <View style={styles.steflixLogoColumn}>
                <Image
                  source={require("../assets/images/steflixLogo.png")}
                  resizeMode="contain"
                  style={styles.steflixLogo}
                ></Image>
                <Text style={styles.watchAnywhere}>Watch anywhere.</Text>
                <Image
                  source={require("../assets/images/hitmanLogo.png")}
                  resizeMode="contain"
                  style={styles.hitmanLogo}
                ></Image>
              </View>
              <CupertinoButtonGrey1
                style={styles.loginButton}
              ></CupertinoButtonGrey1>
              <View style={styles.registerButton1Column}>
                <CupertinoButtonDanger
                  style={styles.registerButton1}
                ></CupertinoButtonDanger>
                <Image
                  source={require("../assets/images/hitman.png")}
                  resizeMode="contain"
                  style={styles.hitmanImg}
                ></Image>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.loginSingupGroup}>
          <ImageBackground
            source={require("../assets/images/posters.png")}
            resizeMode="contain"
            style={styles.posterImg}
            imageStyle={styles.posterImg_imageStyle}
          >
            <View style={styles.buttonStack}>
              <TouchableOpacity style={styles.button}>
                <TextInput
                  placeholder="Email..."
                  keyboardType="email-address"
                  style={styles.emailInput}
                ></TextInput>
              </TouchableOpacity>
              <Image
                source={require("../assets/images/Login_signiup.png")}
                resizeMode="contain"
                style={styles.loginSignUpImg}
              ></Image>
            </View>
            <TouchableOpacity style={styles.button1}>
              <TextInput
                placeholder="Password..."
                keyboardType="default"
                secureTextEntry={true}
                blurOnSubmit={true}
                style={styles.passwordInput}
              ></TextInput>
            </TouchableOpacity>
            <View style={styles.loginButton2Row}>
              <CupertinoButtonGrey1
                style={styles.loginButton2}
              ></CupertinoButtonGrey1>
              <CupertinoButtonDanger
                style={styles.registerButton2}
              ></CupertinoButtonDanger>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundBlur: {
    top: 0,
    left: 579,
    width: 1920,
    height: 4076,
    position: "absolute"
  },
  backgroundBlur_imageStyle: {},
  group2Girls: {
    width: 1789,
    height: 917,
    marginTop: 971,
    marginLeft: 26
  },
  greyBackgroundGirls: {
    top: 0,
    left: 0,
    width: 1789,
    height: 917,
    position: "absolute"
  },
  greyBackgroundGirls_imageStyle: {},
  withFriends: {
    top: 72,
    left: 145,
    position: "absolute",
    fontFamily: "poppins-800",
    color: "#121212",
    fontSize: 48
  },
  shareAccount: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "poppins-800",
    color: "#121212",
    fontSize: 60
  },
  withFriendsStack: {
    width: 454,
    height: 144,
    marginTop: 224,
    marginLeft: 1188
  },
  twoGirls: {
    top: 16,
    left: 102,
    width: 1143,
    height: 1037,
    position: "absolute"
  },
  greyBackgroundGirlsStack: {
    width: 1789,
    height: 1053
  },
  groupBatman: {
    width: 1789,
    height: 917,
    marginLeft: 26
  },
  greyBackgroundBatman: {
    top: 0,
    left: 0,
    width: 1789,
    height: 917,
    position: "absolute"
  },
  greyBackgroundBatman_imageStyle: {},
  ageIsJust: {
    fontFamily: "poppins-800",
    color: "#121212",
    fontSize: 60,
    marginTop: 136,
    marginLeft: 254
  },
  aNumber: {
    fontFamily: "poppins-800",
    color: "#121212",
    fontSize: 50,
    marginLeft: 254
  },
  batman: {
    top: 92,
    left: 895,
    width: 570,
    height: 866,
    position: "absolute"
  },
  greyBackgroundBatmanStack: {
    width: 1789,
    height: 958
  },
  groupHitman: {
    top: 53,
    width: 3000,
    height: 918,
    position: "absolute",
    left: 0
  },
  blackBackground: {
    width: 3000,
    height: 918,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 11,
    overflow: "hidden"
  },
  blackBackground_imageStyle: {
    width: 2998,
    height: 916
  },
  steflixLogo: {
    width: 317,
    height: 192,
    marginLeft: 15
  },
  watchAnywhere: {
    fontFamily: "poppins-800",
    color: "rgba(255,255,255,1)",
    fontSize: 80,
    marginTop: 30
  },
  hitmanLogo: {
    width: 711,
    height: 348,
    marginTop: 117,
    marginLeft: 25
  },
  steflixLogoColumn: {
    width: 736,
    marginBottom: 3
  },
  loginButton: {
    height: 44,
    width: 115,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 6,
    marginLeft: 91,
    marginTop: 36
  },
  registerButton1: {
    height: 44,
    width: 115,
    marginLeft: 40
  },
  hitmanImg: {
    width: 582,
    height: 714,
    marginTop: 16
  },
  registerButton1Column: {
    width: 582,
    marginTop: 36
  },
  steflixLogoColumnRow: {
    height: 810,
    flexDirection: "row",
    marginLeft: 764,
    marginRight: 712
  },
  loginSingupGroup: {
    top: 2459,
    left: 669,
    width: 1662,
    height: 1618,
    position: "absolute"
  },
  posterImg: {
    width: 1662,
    height: 1618
  },
  posterImg_imageStyle: {},
  button: {
    top: 238,
    left: 6,
    width: 468,
    height: 52,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 7,
    borderColor: "#000000",
    borderRadius: 2
  },
  emailInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 52,
    width: 440,
    marginLeft: 19
  },
  loginSignUpImg: {
    top: 0,
    left: 0,
    width: 454,
    height: 270,
    position: "absolute"
  },
  buttonStack: {
    width: 474,
    height: 290,
    marginTop: 397,
    marginLeft: 604
  },
  button1: {
    width: 468,
    height: 52,
    backgroundColor: "#E6E6E6",
    borderWidth: 7,
    borderColor: "#000000",
    borderRadius: 2,
    marginTop: 28,
    marginLeft: 610
  },
  passwordInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 52,
    width: 449,
    marginLeft: 10
  },
  loginButton2: {
    height: 44,
    width: 115,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 6
  },
  registerButton2: {
    height: 44,
    width: 115,
    marginLeft: 71
  },
  loginButton2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 684,
    marginRight: 677
  },
  backgroundBlurStack: {
    width: 3000,
    height: 4077,
    marginTop: -56,
    marginLeft: -579
  }
});

export default Home;
