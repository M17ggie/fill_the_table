
const ReadOnlyOrderData = (props) => {

    props.getId(props.order.orderId)

    return <tr key={props.order.orderId}>
        <td>{props.order.orderId}</td>
        <td>{props.order.name}</td>
        <td>{props.order.purchaseDate}</td>
        <td>{props.order.deliveryDate}</td>
        <td>{props.order.quantity}</td>
        <td>{props.order.amount}</td>
        <td>
            <button>Edit</button>
        </td>
    </tr>
}

export default ReadOnlyOrderData;