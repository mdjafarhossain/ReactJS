import react,{ useState } from "react";

function OrderStatus(){
    const [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'John Doe',
        items: 3
        });

        function updateStatus(st){
            let newStatus=st;
            setOrder({...order, status : newStatus});
        }
        // render order details 
        return( <div>
            <h1>ID:{order.id}</h1>
            <h1>Status:{order.status}</h1>
            <h1>Customer:{order.customer}</h1>
            <h1>Items:{order.items}</h1>

            <label> Choose a Status: &nbsp;</label>
            <select id="mySelect" >
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                
            </select>
            <br/><br/>
            <button class="button button1" onClick={()=>updateStatus(document.getElementById("mySelect").value)}>Update Status</button>
        </div>);

}

export default OrderStatus;