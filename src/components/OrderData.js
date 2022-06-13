import { Fragment, useState } from 'react'
import EditOrderRow from './EditOrderRow'
import styles from './OrderData.module.css'
import ReadOnlyOrderData from './ReadOnlyOrderData'

const OrderData = (props) => {

    const [editRow, setEditRow] = useState(1)

    return <div className={styles['table-data']}>
        <form>
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
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.onAddData.map(order =>
                        <Fragment>
                            {/* If the row id matches with the editRow state(edit button), display edit row  */}
                            {editRow === order.id ? <EditOrderRow />: <ReadOnlyOrderData order={order} />}
                        </Fragment>)}
                </tbody>
            </table>
        </form>
    </div>
}

export default OrderData