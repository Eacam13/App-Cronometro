import React from 'react'
import { 
    Container, BotaoIniciar, TextoIniciar, 
    TextoResult, BotaoReiniciar, TextoReiniciar 
} from './styles'

import { cronometro } from '../Func'

export function Main() {
  const { count, setCount, timer, setTimer, iniciarContagem, formatTime } = cronometro()

  return (
    <Container>
        <BotaoIniciar
          onPress={iniciarContagem}
        >
            <TextoIniciar>{timer ? 'Parar' : 'Iniciar'}</TextoIniciar>
        </BotaoIniciar>
        <TextoResult>{formatTime(count)}</TextoResult>
        <BotaoReiniciar
         onPress={() => {
          if (timer instanceof Object) {
            clearInterval(timer)
            setTimer(null)
          }
          setCount(0)
        }}
        >
            <TextoReiniciar>Reiniciar</TextoReiniciar>
        </BotaoReiniciar>
    </Container>
  )
}