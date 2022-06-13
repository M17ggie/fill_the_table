const ReadOnlyOrderData = ({ order }) => {
    return <tr key={order.orderId}>
        <td>{order.orderId}</td>
        <td>{order.name}</td>
        <td>{order.purchaseDate}</td>
        <td>{order.deliveryDate}</td>
        <td>{order.quantity}</td>
        <td>{order.amount}</td>
    </tr>
}

export default ReadOnlyOrderData;