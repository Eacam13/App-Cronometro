import styled from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 550px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`
export const BotaoIniciar = styled.TouchableOpacity`
    background-color: #7e22ce;
    width: 190px;
    height: 190px;
    border-radius: 150px;
    border: 12px solid #d8b4fe;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`
export const TextoIniciar = styled.Text`
    color: #faf5ff;
    font-size: 26px;
    font-weight: bold;
`
export const TextoResult = styled.Text`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 70px;
`
export const BotaoReiniciar = styled.TouchableOpacity`
    width: 120px;
    height: 40px;
    background-color: #7e22ce;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 150px;
    border: 4px solid #d8b4fe;
`
export const TextoReiniciar = styled.Text`
    color: #faf5ff;
    font-size: 16px;
    font-weight: bold;
`  