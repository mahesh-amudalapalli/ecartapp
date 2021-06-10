import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdservice from './Services/ProductService.js'

export default class Table_tb extends Component {
    componentDidMount()
    {
        const person1=Pdservice.GetAll().then((result)=>{console.log('res'+result)}).catch((error)=>{console.log(error)});
    }
    render() {
       /*  const person = [
            {id: 1, name: 'Gob', value: '2'},
            {id: 2, name: 'Buster', value: '5'},
            {id: 3, name: 'George Michael', value: '4'}
          ]; */
          const person=Pdservice.GetAll().then((result)=>{console.log(result)});
          console.log("persons:"+person.length);
          
          const columns = [{
            dataField: 'id',
            text: 'Product ID'
          }, {
            dataField: 'name',
            text: 'Product Name'
          }, {
            dataField: 'value',
            text: 'Product value'
          }];
        return (
            <div>
        <p className="Table-header">Basic Table</p>
         
        <BootstrapTable keyField='id' data={ person } columns={ columns } />
      </div>
        )
    }
}
