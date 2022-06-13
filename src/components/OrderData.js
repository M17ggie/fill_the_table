import { useState } from 'react'
import styles from './OrderData.module.css'

const orders = [{
    key: Math.random().toString(),
    orderId: 1,
    name: 'Black Cat',
    purchaseDate: '12-06-2022',
    deliveryDate: '11-05-2022',
    quantity: 5,
    amount: 450
},
{
    key: Math.random().toString(),
    orderId: 2,
    name: 'Maggie',
    purchaseDate: '15-06-2022',
    deliveryDate: '10-05-2022',
    quantity: 10,
    amount: 10000
},
{
    key: Math.random().toString(),
    orderId: 3,
    name: 'Danny',
    purchaseDate: '15-06-2022',
    deliveryDate: '17-05-2022',
    quantity: 50,
    amount: 50000
}]

const OrderData = (props) => {

    const [orderDetail, setOrderDetail] = useState(orders)

    const newOrder= props.onAddData

    console.log(newOrder)

    // setOrderDetail(prevOrder => {
    //     return [...prevOrder, newOrder]
    // })

    console.log(orderDetail)

    return <div className={styles['table-data']}>
        <table>
            <thead>
                <tr>
                    <th>
                        Order Id
                    </th>
                    <th>
                        Customer Name
                    </th>
                    <th>
                        Delivery date
                    </th>
                    <th>
                        Purchase date
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Amount (in Rs)
                    </th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.name}</td>
                    <td>{order.purchaseDate}</td>
                    <td>{order.deliveryDate}</td>
                    <td>{order.quantity}</td>
                    <td>{order.amount}</td>
                </tr>)}

            </tbody>
        </table>
    </div>
}

export default OrderData