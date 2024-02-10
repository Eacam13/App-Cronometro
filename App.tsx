import { StatusBar } from 'react-native'
import { Home } from './src/page/Home'


export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Home />
    </>
  )
}
