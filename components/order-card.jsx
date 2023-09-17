import { formatDistance, subHours } from 'date-fns'
import { Pressable, Text } from 'native-base'

export function OrderCard ({ order, setTargetOrder }) {
  const handlePress = () => {
    setTargetOrder(order)
  }

  const productosAmount = order.products.reduce((ac, v, i) => {
    return ac + v.amount
  }, 0)

  return (
    <Pressable onPress={handlePress} background={order.pending ? 'red.400' : 'gray.400'} flex='content' marginY='10px' padding='12px' borderRadius='md'>
      <Text fontSize='xl' bold color='white'>#{order.id}</Text>
      <Text color='white' fontSize='md'>{productosAmount} producto{order.products.length !== 1 ? 's' : ''}</Text>
      <Text color='white' marginTop='14px' fontSize='sm'>
        {formatDistance(subHours(new Date(), order.createdAt.getHours()), new Date(), { addSuffix: true })}
      </Text>
    </Pressable>
  )
}
