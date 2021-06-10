import React, { Component } from 'react'
import Pdservice from '../Services/ProductService.js'

export default class Create extends Component {
    
    formFields={
        itemCode:'',
        name:'',
        displayName:'',
        price:'',
        mou:''
    }

    constructor(props)
    {
        super(props);
        this.state={
            formFields:this.formFields
        }
    }

    handleChange = (event) => {
        let formFields = this.state.formFields;
        formFields[event.target.name] = event.target.value;
        this.setState({formFields});
    }

    handleSave = (event) => {
        let formFields = this.state.formFields;
        let product = {};
        product.itemCode = formFields.itemCode;
        product.name = formFields.name;
        product.displayName = formFields.displayName;
        product.price = parseFloat(formFields.price);
        product.mou = formFields.mou;
        product.status = 'Active';
        product.categoryId = 30;
        Pdservice.Create(product)
            .then((result) => {this.props.updateProductsHandler(); })
            .catch((error) => { console.log(error) });
        
    }

    render() {
        const {itemCode,name,displayName,price,uom}=this.state.formFields;
        return (
            <div className='tab col-md-4' style={{float:'left',marginLeft:'50px',marginTop:'40px'}}>
                {this.props.action=='Create'?<h2>Create</h2>:<h2>Edit</h2>}
                <hr />
                <div>
                    <form>
                        <div className="form-group">
                            <label>Item Code</label>
                            <input type="text" name='itemCode' id='itemCode' className="form-control"
                            value={itemCode} onChange={this.handleChange} />
                            <label>Name</label>
                            <input type="text" name='name' id='name' className="form-control"
                            value={name} onChange={this.handleChange} />
                            <label>Display Description</label>
                            <input type="text" name='displayName' id='displayName' className="form-control"
                            value={displayName} onChange={this.handleChange} />
                            <label>Price</label>
                            <input type="text" name='price' id='price' className="form-control"
                            value={price} onChange={this.handleChange} />
                            <label>Unit of Measure</label>
                            <input type="text" name='mou' id='mou' className="form-control"
                            value={uom} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <button type='button' className='btn btn-primary' onClick={this.handleSave}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
