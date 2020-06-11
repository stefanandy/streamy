import React, { Component } from "react";
import styled, { css } from "styled-components";
import {render} from "react-native-web";

class CupertinoButtonGrey1 extends Component{

    constructor(props){
        super(props)
        this.loginFunction=this.loginFunction.bind(this);
    }

    loginFunction() {
            alert(1);
    }

    render()
    {
        return (
            <Container {...this.props}>
                <a href='#' onClick={this.loginFunction}>
                    <Login>Login</Login>
                </a>
            </Container>
        );
    }
}

const Container = styled.div`
  display: flex;
  background-color: #8E8E93;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Login = styled.span`
  font-family: Poppins-500;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonGrey1;
