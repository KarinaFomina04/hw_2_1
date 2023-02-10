import React from 'react';
import styled from 'styled-components';
import { MoneyType } from "./App";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === "Dollars" ? "blue" : "green"}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
        </Banknote>




            {/* {props.money.banknotes==="Dollars" 
            ?
            <BanknotGreen>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </BanknotGreen>
            :
            <BanknotBlue>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </BanknotBlue> */}

        </>
    );
};

const Banknote = styled.div`
background-color: ${props => {
        if (props.color === "blue") {
            return "blue";
        } else {
            return "green";
        }
    }};
width: 400px;
higth: 200px;
margin: 10px;`

const BanknotGreen = styled.div`
background-color: green;
width: 400px;
higth: 200px;
margin: 10px;`

const BanknotBlue = styled.div`
background-color: blue;
width: 400px;
higth: 200px;
margin: 10px;`
