import { Card, Text } from 'native-base'

export default function ProductModelCard ({ product }) {
  return (
    <Card>
      <Text><Text bold color='red.400'>{product.amount} Por</Text> {product.name} <Text color='red.400'>{product.price * product.amount}$</Text></Text>
    </Card>
  )
}
