import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function Home(props) {
  return (
    <Stack>
      <BackgroundBlur>
        <Group2Girls>
          <GreyBackgroundGirlsStack>
            <GreyBackgroundGirls>
              <WithFriendsStack>
                <WithFriends>with friends.</WithFriends>
                <ShareAccount>Share account</ShareAccount>
              </WithFriendsStack>
            </GreyBackgroundGirls>
            <TwoGirls src={require("../assets/images/2girls.png")}></TwoGirls>
          </GreyBackgroundGirlsStack>
        </Group2Girls>
        <GroupBatman>
          <GreyBackgroundBatmanStack>
            <GreyBackgroundBatman>
              <AgeIsJust>Age is just</AgeIsJust>
              <ANumber>a number.</ANumber>
            </GreyBackgroundBatman>
            <Batman src={require("../assets/images/batman.png")}></Batman>
          </GreyBackgroundBatmanStack>
        </GroupBatman>
      </BackgroundBlur>
      <GroupHitman>
        <BlackBackground>
          <SteflixLogoColumnRow>
            <SteflixLogoColumn>
              <SteflixLogo
                src={require("../assets/images/steflixLogo.png")}
              ></SteflixLogo>
              <WatchAnywhere>Watch anywhere.</WatchAnywhere>
              <HitmanLogo
                src={require("../assets/images/hitmanLogo.png")}
              ></HitmanLogo>
            </SteflixLogoColumn>
            <CupertinoButtonGrey1
              style={{
                height: 44,
                width: 115,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,1)",
                backgroundColor: "rgba(0,0,0,1)",
                borderRadius: 6,
                marginLeft: 91,
                marginTop: 36,
                borderStyle: "solid"
              }}
            ></CupertinoButtonGrey1>
            <RegisterButton1Column>
              <CupertinoButtonDanger
                style={{
                  height: 44,
                  width: 115,
                  marginLeft: 40
                }}
              ></CupertinoButtonDanger>
              <HitmanImg
                src={require("../assets/images/hitman.png")}
              ></HitmanImg>
            </RegisterButton1Column>
          </SteflixLogoColumnRow>
        </BlackBackground>
      </GroupHitman>
      <LoginSingupGroup>
        <PosterImg>
          <ButtonStack>
            <Button>
              <ButtonOverlay>
                <EmailInput placeholder="Email..."></EmailInput>
              </ButtonOverlay>
            </Button>
            <LoginSignUpImg
              src={require("../assets/images/Login_signiup.png")}
            ></LoginSignUpImg>
          </ButtonStack>
          <Button1>
            <ButtonOverlay>
              <PasswordInput placeholder="Password..."></PasswordInput>
            </ButtonOverlay>
          </Button1>
          <LoginButton2Row>
            <CupertinoButtonGrey1
              style={{
                height: 44,
                width: 115,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,1)",
                backgroundColor: "rgba(0,0,0,1)",
                borderRadius: 6,
                borderStyle: "solid"
              }}
            ></CupertinoButtonGrey1>
            <CupertinoButtonDanger
              style={{
                height: 44,
                width: 115,
                marginLeft: 71
              }}
            ></CupertinoButtonDanger>
          </LoginButton2Row>
        </PosterImg>
      </LoginSingupGroup>
    </Stack>
  );
}

const Stack = styled.div`
  width: 2090px;
  height: 4077px;
  margin-top: -56px;
  margin-left: -579px;
  position: relative;
  display: flex;
  
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const BackgroundBlur = styled.div`
  top: 0px;
  left: 579px;
  width: 1920px;
  height: 4076px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/ansamblu.png")});
  background-size: cover;
`;

const Group2Girls = styled.div`
  width: 1789px;
  height: 917px;
  flex-direction: column;
  display: flex;
  margin-top: 971px;
  margin-left: 26px;
`;

const GreyBackgroundGirls = styled.div`
  top: 0px;
  left: 0px;
  width: 1789px;
  height: 917px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/fundalGri1.png")});
  background-size: cover;
`;

const WithFriends = styled.span`
  font-family: Poppins-500;
  top: 72px;
  left: 145px;
  position: absolute;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 48px;
`;

const ShareAccount = styled.span`
  font-family: Poppins-500;
  top: 0px;
  left: 60px;
  position: absolute;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 50px;
`;

const WithFriendsStack = styled.div`
  width: 454px;
  height: 144px;
  margin-top: 224px;
  margin-left: 1188px;
  position: relative;
`;

const TwoGirls = styled.img`
  top: 16px;
  left: 102px;
  width: 1143px;
  height: 1037px;
  position: absolute;
  object-fit: contain;
`;

const GreyBackgroundGirlsStack = styled.div`
  width: 1789px;
  height: 1053px;
  position: relative;
`;

const GroupBatman = styled.div`
  width: 1789px;
  height: 917px;
  flex-direction: column;
  display: flex;
  margin-left: 26px;
`;

const GreyBackgroundBatman = styled.div`
  top: 0px;
  left: 0px;
  width: 1789px;
  height: 917px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/fundalGri1.png")});
  background-size: cover;
`;

const AgeIsJust = styled.span`
  font-family: Poppins-500;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 60px;
  margin-top: 136px;
  margin-left: 254px;
`;

const ANumber = styled.span`
  font-family: Poppins-500;
  font-style: normal;
  font-weight: 800;
  color: #121212;
  font-size: 50px;
  margin-left: 254px;
`;

const Batman = styled.img`
  top: 92px;
  left: 895px;
  width: 570px;
  height: 866px;
  position: absolute;
  object-fit: contain;
`;

const GreyBackgroundBatmanStack = styled.div`
  width: 1789px;
  height: 958px;
  position: relative;
`;

const GroupHitman = styled.div`
  top: 53px;
  width: 3000px;
  height: 918px;
  position: absolute;
  left: 0px;
  flex-direction: column;
  display: flex;
`;

const BlackBackground = styled.div`
  width: 2400px;
  height: 100%;
  border-width: 0px;
  border-color: rgba(255,255,255,1);
  border-radius: 11px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  background-image: url(${require("../assets/images/fundalNegruHitman.png")});
  background-size: cover;
`;

const SteflixLogo = styled.img`
  width: 317px;
  height: 100%;
  margin-left: 15px;
  object-fit: contain;
`;

const WatchAnywhere = styled.span`
  font-family: Poppins-500;
  font-style: normal;
  font-weight: 800;
  color: rgba(255,255,255,1);
  font-size: 80px;
  margin-top: 20px;
`;

const HitmanLogo = styled.img`
  width: 711px;
  height: 100%;
  margin-top: 117px;
  margin-left: 25px;
  object-fit: contain;
`;

const SteflixLogoColumn = styled.div`
  width: 736px;
  flex-direction: column;
  display: flex;
  margin-bottom: 3px;
`;

const HitmanImg = styled.img`
  width: 582px;
  height: 100%;
  margin-top: 16px;
  object-fit: contain;
`;

const RegisterButton1Column = styled.div`
  width: 582px;
  flex-direction: column;
  display: flex;
  margin-top: 36px;
`;

const SteflixLogoColumnRow = styled.div`
  height: 810px;
  flex-direction: row;
  display: flex;
  margin-left: 764px;
  margin-right: 712px;
`;

const LoginSingupGroup = styled.div`
  top: 2459px;
  left: 669px;
  width: 1662px;
  height: 1618px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const PosterImg = styled.div`
  width: 1662px;
  height: 100%;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/posters.png")});
  background-size: cover;
`;

const Button = styled.div`
  top: 238px;
  left: 6px;
  width: 468px;
  height: 52px;
  position: absolute;
  background-color: #E6E6E6;
  border-width: 7px;
  border-color: #000000;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const EmailInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  height: 52px;
  width: 440px;
  margin-left: 19px;
  border: none;
  background: transparent;
`;

const LoginSignUpImg = styled.img`
  top: 0px;
  left: 0px;
  width: 454px;
  height: 270px;
  position: absolute;
  object-fit: contain;
`;

const ButtonStack = styled.div`
  width: 474px;
  height: 290px;
  margin-top: 397px;
  margin-left: 604px;
  position: relative;
`;

const Button1 = styled.div`
  width: 468px;
  height: 52px;
  background-color: #E6E6E6;
  border-width: 7px;
  border-color: #000000;
  border-radius: 2px;
  flex-direction: column;
  display: flex;
  margin-top: 28px;
  margin-left: 610px;
  border-style: solid;
`;

const PasswordInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: regular;
  color: #121212;
  height: 52px;
  width: 449px;
  margin-left: 10px;
  border: none;
  background: transparent;
  type:password;
`;

const LoginButton2Row = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 42px;
  margin-left: 684px;
  margin-right: 677px;
`;

export default Home;
