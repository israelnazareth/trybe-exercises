const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const nameClient = order.name;
  const phoneNumberClient = order.phoneNumber;
  const addressClient = order.address
  
  return `Olá ${deliveryPerson}, entrega para ${nameClient}, Telefone: ${phoneNumberClient}, ${addressClient}.`
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const orderPizza = Object.keys(order.order.pizza);
  const orderDrink = order.order.drinks.coke.type;
  const totalAmount = order.payment.total = 50;

  return `Olá ${order.name}, o total do seu pedido de ${orderPizza[0]}, ${orderPizza[1]} e ${orderDrink} é R$${totalAmount},00.`;

}

orderModifier(order);
