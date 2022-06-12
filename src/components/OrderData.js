import styles from './OrderData.module.css'

const OrderData = (props) => {

    const orders=[{
        orderId: 1,
        name: 'Black Cat',
        deliveryDate: '11-05-2022',
        purchaseDate: '12-06-2022',
        quantity: 5,
        amount: 450
    }]

    props.onAddData(orders)

    return <div className={styles['table-data']}>
        <table>
            <tbody>
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
                <tr>
                    <td>{orders[0].orderId}</td>
                    <td>{orders[0].name}</td>
                    <td>{orders[0].purchaseDate}</td>
                    <td>{orders[0].deliveryDate}</td>
                    <td>{orders[0].quantity}</td>
                    <td>{orders[0].amount}</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default OrderData