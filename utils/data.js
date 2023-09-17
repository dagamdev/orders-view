export const products = [
  {
    id: 1,
    name: 'Pizza Salami',
    price: 80
  },
  {
    id: 2,
    name: 'Hamburguesa',
    price: 40
  }
]

export const orders = [
  {
    id: 1,
    products: [
      {
        id: 1,
        name: 'Pizza Salami',
        price: 80,
        amount: 1
      }
    ],
    reason: 'Pedido de comida',
    pending: true,
    createdAt: new Date('2023-09-16T03:24:00'),
    location: 'C/ Josefa brea #291, Ens. Capotillo, D.N.'
  },
  {
    id: 2,
    products: [
      {
        id: 2,
        name: 'Hamburguesa',
        price: 40,
        amount: 2
      }
    ],
    reason: 'Cena',
    pending: true,
    createdAt: new Date('2023-09-16T06:24:00'),
    location: 'C/ Josefa brea #291, Ens. Capotillo, D.N.'
  },
  {
    id: 3,
    products: [
      {
        id: 1,
        name: 'Pizza Salami',
        price: 80,
        amount: 1
      },
      {
        id: 2,
        name: 'Hamburguesa',
        price: 40,
        amount: 1
      }
    ],
    reason: 'Hola',
    pending: false,
    createdAt: new Date('2023-09-16T10:00:00'),
    location: 'C/ Hidalgo #20, Ens. Capotillo, D.N.'
  }
]
