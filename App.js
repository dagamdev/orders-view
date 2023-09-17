import { StatusBar } from 'expo-status-bar'
// import { StyleSheet } from 'react-native'
import { NativeBaseProvider, Box, Text, FlatList } from 'native-base'
import { useState } from 'react'
import { orders } from './utils/data'
import { OrderCard } from './components/order-card'
import OrderModal from './components/order-model'

export default function App () {
  const [targetOrder, setTargetOrder] = useState()
  const newOrders = orders.filter(o => o.pending)
  const oldOrders = orders.filter(o => !o.pending)

  return (
    <NativeBaseProvider>
      <Box flex={1} padding='20px'>

        <Box height='50%'>
          <Text fontSize='2xl' bold>Nuevo <Text color='red.500' fontSize='lg'>{newOrders.length}</Text></Text>
          <FlatList
            data={newOrders}
            renderItem={({ item }) => <OrderCard order={item} setTargetOrder={setTargetOrder} />}
            keyExtractor={item => item.id}
          />
        </Box>

        <Box height='50%'>
          <Text fontSize='xl' bold>Aceptado <Text color='red.500' fontSize='lg'>{oldOrders.length}</Text></Text>
          <FlatList
            data={oldOrders}
            renderItem={({ item }) => <OrderCard order={item} setTargetOrder={setTargetOrder} />}
            keyExtractor={item => item.id}
          />
        </Box>

        <OrderModal order={targetOrder} setOrder={setTargetOrder} />

      </Box>

      <StatusBar style='auto' />
    </NativeBaseProvider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center'
//   }
// })
