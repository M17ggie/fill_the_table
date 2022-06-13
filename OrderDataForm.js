import { useRef } from 'react'
import styles from './OrderDataForm.module.css'

const OrderDataForm = (props) => {

    const orderRef = useRef();
    const deliveryRef = useRef()
    const purchaseRef = useRef()
    const quantityRef = useRef()
    const amountRef = useRef()
    const nameRef = useRef()

    const formSubmitHandler = (e) => {
        const enteredOrder = orderRef.current.value;
        const enteredName = nameRef.current.value;
        const enteredPurchase = purchaseRef.current.value;
        const enteredDelivery = deliveryRef.current.value;
        const enteredAmount = amountRef.current.value;
        const enteredQuantity = quantityRef.current.value;
        e.preventDefault()

        const orderData = {
            orderId: +enteredOrder,
            name: enteredName,
            purchaseDate: enteredPurchase,
            deliveryDate: enteredDelivery,
            amount: +enteredAmount,
            quantity: +enteredQuantity
        }
        props.onGetData(orderData)
    }

    return <form onSubmit={formSubmitHandler}>
        <div className={styles['form-control']}>
            <label>
                Order Id
                <input type='text' id='order-id' ref={orderRef} />
            </label>

            <label htmlFor='cust_name'>
                Customer Name
                <input type='text' id='cust_name' ref={nameRef} />
            </label>

            <label htmlFor='delivery-date'>
                Delivery Date
                <input type='date' id='delivery-date' ref={deliveryRef} />
            </label>

            <label htmlFor='purchase-date'>
                Purchase Date
                <input type='date' id='purchase-date' ref={purchaseRef} />
            </label>

            <label htmlFor='quantity'>
                Quantity
                <input type='number' id='quantity' ref={quantityRef} />
            </label>

            <label htmlFor='amount'>
                Amount
                <input type='number' id='amount' ref={amountRef} />
            </label>
            <button type="submit">Add</button>
        </div>
    </form>

}

export default OrderDataForm;