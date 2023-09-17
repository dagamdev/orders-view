import { Text, Modal, Button, FlatList } from 'native-base'
import ProductModelCard from './product-model-card'
import Icon from 'react-native-vector-icons/EvilIcons'

export default function OrderModal ({ order, setOrder }) {
  // console.log(order)

  return (
    <Modal isOpen={order !== undefined} onClose={() => setOrder()} size='xl'>
      <Modal.Content>
        <Modal.CloseButton name='cc'>cancelar</Modal.CloseButton>
        <Modal.Header>
          <Text bold fontSize='lg'>Detalles de la orden</Text>
        </Modal.Header>
        <Modal.Body>
          <Text fontWeight='medium' fontSize='lg'>Orden #{order?.id}</Text>
          {order?.products !== undefined && <FlatList
            data={order?.products}
            renderItem={({ item }) => <ProductModelCard product={item} />}
            keyExtractor={item => item.id}
                                            />}
        </Modal.Body>
        <Modal.Body>
          <Text bold fontSize='sm'><Icon name='location' size={20} color='#900' /> Ubicación de destino:</Text>
          <Text>{order?.location}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            width='full' marginBottom='10px' backgroundColor='green.500'
            variant='solid' colorScheme='success'
            onPress={() => {
              setOrder()
            }}
          >
            Aceptar pedido
          </Button>
          <Button
            width='full'
            variant='subtle' colorScheme='error'
            onPress={() => {
              setOrder()
            }}
          >
            Cancelar pedido
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
