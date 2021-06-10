import React, { Component } from 'react'
import Pdservice from '../Services/ProductService.js'
import Create from './Create.js'
import { Navbar, Nav, NavLink, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            action:'Create'
        }
       
    }

    componentDidMount() {
       this.updateProducts();
    }

    updateProducts=()=>
    {
        //alert("update");
        Pdservice.GetAll()
        .then((result) => { this.setState({ Products: result.data }) })
        .catch((error) => { console.log(error) });
    }

    render() {
        return (
            <>
            <div style={{float:'left'}} className='col-md-5'>
                <h2>Product Count : {this.state.Products.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Mou</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Products.map((product) => {
                                return( <tr>
                                    <td>{product.itemCode}</td>
                                    <td>{product.displayName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.mou}</td>
                                    {!this.props.readOnly &&<td><Nav.Link style={{padding:0}} as={Link} onClick={()=>{this.setState({action:'Edit'})}}>Edit</Nav.Link></td>}
                                    {!this.props.readOnly &&<td><Nav.Link style={{padding:0}} as={Link} to='/home'>Delete</Nav.Link></td>}
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
            {!this.props.readOnly && <Create updateProductsHandler={this.updateProducts} action={this.state.action} />}
            </>
        )
    }
}
