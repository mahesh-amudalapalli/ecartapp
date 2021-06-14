import React, { Component } from 'react'
import Pdservice from '../Services/ProductService.js'
import Dialog from 'react-bootstrap-dialog'

export default class Create extends Component {

    formFields = {
        productId: '',
        itemCode: '',
        name: '',
        displayName: '',
        price: '',
        mou: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            formFields: this.formFields,
            action: this.props.action,
            isStateChange: false
        }

        Dialog.setOptions({
            defaultOkLabel: 'Yessssss!',
            defaultCancelLabel: 'Noooooooo!!',
            primaryClassName: 'btn-success',
            defaultButtonClassName: 'btn-primary'
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (state.isStateChange === true) {
            return {
                isStateChange: false
            }
        }
        if (props.editRecord != undefined) {
            // alert(props.editRecord);
            return {
                action: props.action,
                isStateChange: false, formFields: props.editRecord
            }
        }
        return {
            action: props.action,
            isStateChange: false
        }
    }

    handleChange = (event) => {
        let formFields = this.state.formFields;
        formFields[event.target.name] = event.target.value;
        this.setState({ formFields });
    }

    handleCreate = (event) => {
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
            .then((result) => {
                this.props.updateProductsHandler();
                this.setState({ action: 'Create', formFields: this.formFields, isStateChange: true });
            })
            .catch((error) => { console.log(error) });

    }

    handleUpdate = (event) => {
        let formFields = this.state.formFields;
        let product = {};
        product.productId = formFields.productId;
        product.itemCode = formFields.itemCode;
        product.name = formFields.name;
        product.displayName = formFields.displayName;
        product.price = parseFloat(formFields.price);
        product.mou = formFields.mou;
        product.status = 'Active';
        product.categoryId = 30;
        Pdservice.Update(formFields.productId, product)
            .then((result) => {
                this.props.updateProductsHandler();
                this.setState({ action: 'Create', formFields: this.formFields, isStateChange: true });
            })
            .catch((error) => { console.log(error) });

    }

    handleDelete = (event) => {
        this.dialog.show({
            title: 'Confirmation',
            body:'Are you sure to delete?',
            actions: [
                Dialog.CancelAction(() => {
                    return;
                }),
                Dialog.OKAction(() => {
                    let formFields = this.state.formFields;
                    let product = {};
                    product.productId = formFields.productId;
                    product.itemCode = formFields.itemCode;
                    product.name = formFields.name;
                    product.displayName = formFields.displayName;
                    product.price = parseFloat(formFields.price);
                    product.mou = formFields.mou;
                    product.status = 'Active';
                    product.categoryId = 30;
                    Pdservice.Delete(formFields.productId)
                        .then((result) => {
                            this.props.updateProductsHandler();
                            this.setState({ action: 'Create', formFields: this.formFields, isStateChange: true });
                        })
                        .catch((error) => { console.log(error) });
                })
            ],
            bsSize: 'large',
            onHide: (dialog) => {
                //dialog.show()
                console.log('closed by clicking background.')
            }
        })


        /* let formFields = this.state.formFields;
        let product = {};
        product.productId=formFields.productId;
        product.itemCode = formFields.itemCode;
        product.name = formFields.name;
        product.displayName = formFields.displayName;
        product.price = parseFloat(formFields.price);
        product.mou = formFields.mou;
        product.status = 'Active';
        product.categoryId = 30;
        Pdservice.Delete(formFields.productId)
            .then((result) => {
                this.props.updateProductsHandler();
                this.setState({action:'Create',formFields:this.formFields,isStateChange:true});
             })
            .catch((error) => { console.log(error) }); */

    }



    render() {
        const { productId, itemCode, name, displayName, price, mou } = this.state.formFields;
        return (
            <div className='tab col-md-4' style={{ float: 'left', marginLeft: '50px', marginTop: '40px' }}>
                <h2>{this.state.action}</h2>
                <hr />
                <div>
                    <form>
                        <div className="form-group">
                            <input type="hidden" id='productId' value={productId} />
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
                                value={mou} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            {this.state.action === 'Create' && <button type='button' className='btn btn-primary' onClick={this.handleCreate}>Create</button>}
                            {this.state.action === 'Edit' && <button type='button' className='btn btn-primary' onClick={this.handleUpdate}>Update</button>}
                            {this.state.action === 'Delete' && <button type='button' className='btn btn-primary' onClick={this.handleDelete}>Delete</button>}
                            {(this.state.action === 'Edit' || this.state.action === 'Delete') && <button type='button' style={{ float: 'right' }} className='btn btn-danger' onClick={() => { this.setState({ isStateChange: true, action: 'Create', formFields: this.formFields }) }}>Cancel</button>}
                            <Dialog ref={(el) => { this.dialog = el }} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
