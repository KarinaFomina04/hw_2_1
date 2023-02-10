import React from 'react';
import { CurrentBankomat } from "./CurrentBankomat";
import { MoneyType } from "./App";
import styled from 'styled-components';

type CityPropsType = {
    data: MoneyType[] //встречаем денюжки
}

export const City = (props: CityPropsType) => {

    // const mappedMoney = props.data.map((el: MoneyType, index) => (
    //     <CurrentBankomat
    //         key={index}
    //         money={el}
    //     />
    // ))
    const mappedMoney = props.data.map(el => {
        return (
           <CurrentBankomat key={el.number} money={el}/> //несли map ставим key
        )
    })

    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`
