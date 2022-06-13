const EditOrderRow=()=>{
    return <tr>
        <td>
            <input type='number' required placeholder="Enter OrderId" />
        </td>
        <td>
            <input type='text' required placeholder="Enter Customer Name" />
        </td>
        <td>
            <input type='date' required placeholder="Enter purchase date" />
        </td>
        <td>
            <input type='date' required  placeholder="Enter delivery date" />
        </td>
        <td>
            <input type='number' required placeholder="Enter quantity" />
        </td>
        <td>
            <input type='number' required placeholder="Enter amount" />
        </td>
    </tr>
}

export default EditOrderRow