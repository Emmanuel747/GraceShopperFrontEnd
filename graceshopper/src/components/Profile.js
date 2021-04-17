import {useState, useEffect} from 'react'
import Table from "react-bootstrap/Table";

const Profile = ({username, userId}) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("https://peaceful-spire-60083.herokuapp.com/api/orders")
            .then((response) => response.json())
            .then((result) => {
                setOrders(result);
            })
            .catch(console.error);
    }, [])

    return (
        <div>
            <h1>
                {username.toUpperCase()}'s PROFILE

            </h1>
            <div>
                    Order History
            </div>
            <section style={{ overflow: "auto", height: "600px" }}>
          <center>
            <Table
              striped
              bordered
              hover
              style={{ backgroundColor: "#023E8A" }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Title</th>
                  <th>Product Image</th>
                  <th>Product Price</th>
                  <th>Count</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              {/* {userId ? 
              
              orders.map((order, index) => {
                  return{userId === order.userId ?
                   (
                    <tbody>
                      <tr key={index}>
                        <td>{order.id}</td>
                        <td>{order.productTitle}</td>
                        <td>
                          <img
                            src={order.imageURL}
                            alt={order.productTitle}
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td>{order.productPrice}</td>
                        <td>{order.count}</td>
                        <td>{order.orderStatus}</td>
                      </tr>
                    </tbody>)
                    : null}
                
                })
                
                : <div> You must be logged in to utilize the profile page </div>} */}
            </Table>
          </center>
        </section>
        </div>
    )
}

export default Profile;