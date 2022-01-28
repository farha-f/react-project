import React,{useState,useEffect} from "react";
import axios from 'axios';
const Mycart=()=>{
    const[allproduct , updateProduct] = useState([]);
    const getProduct = () =>{
        axios.get("http://localhost:1234/cart")
        .then(response =>{ 
            updateProduct(response.data);
        })
    }

    useEffect(()=>{
        getProduct();
    },[true])
    const[msg ,updateMsg]=useState("");
    const removeItem = (proid)=>{
        var url="http://localhost:1234/cart/"+proid;
        axios.delete(url).then(response =>{
            updateMsg("Item Removed Successfuly from cart !");
            getProduct(); //to reload the list
        })
    }
const[name ,pickName]=useState("");
const[email,pickEmail]=useState("");
const[mobile,pickMobile]=useState("");
const[address,pickAddress]=useState("");

const save = () =>{
    var customerData = {
        "name":name,
        "email":email,
        "mobile":mobile,
        "address":address,
        "myproduct":allproduct
    }
    var url = "http://localhost:1234/order/";
    axios.post(url , customerData)
    .then(response =>{
        updateMsg("Hi , "+ name + " Your Order Placed Successfully !");
     /*   allproduct.map((pinfo,index)=>{
            removeItem(pinfo.id); // it is passing cart id to delete all items from cart 
        })
        */

    })
}


return(
    <div className="container mt-5">
        <div className="row">
            <p className="col-lg-12 text-center text-danger p-2">{msg}</p>
            <div className="col-lg-4">
                <div className="bg-primary p-4 rounded text-white">
                <h3 className="text-center">Customer Details</h3>
           <div className="mb-3">
            <label>Customer Name</label>
            <input type="text" className="form-control"
             onChange={obj=>pickName(obj.target.value)}/>
           </div>
           <div className="mb-3">
            <label>Email Id</label>
            <input type="text" className="form-control"
            onChange={obj=>pickEmail(obj.target.value)}/>
           </div>
           <div className="mb-3">
            <label>Mobile Number</label>
            <input type="text" className="form-control"
                        onChange={obj=>pickMobile(obj.target.value)}/>
           </div>
           <div className="mb-3">
            <label>Delivery address</label>
            <input type="text" className="form-control"
                        onChange={obj=>pickAddress(obj.target.value)}/>
           </div>
           <div className="text-center">
                <button className="btn btn-danger" onClick={save}>Place My order</button>
           </div>
            </div>

            </div>
            <div className="col-lg-8">
                <div className="bg-light p-4 rounded">
                    <h3 className="text-center">Item in Cart</h3>
                        <table className="table">
                            <thead>
                                <tr className="text-primary">
                                    <th>Product Name</th>
                                    <th>Photo</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allproduct.map((pro,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{pro.name}</td>
                                                <td><img src={pro.pic} height="70" width="70"/></td>
                                                <td>Rs.{pro.price}</td>
                                                <td>
                                                    <i className="fa fa-trash fa-2x text-danger" onClick={removeItem.bind(this, pro.id)}></i>
                                                </td>
                                                </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    
                </div>

            </div>
           
        </div>

    </div>
)
}

export default Mycart;